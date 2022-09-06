import "./index.css";
import { Card } from "../components/Card";
import { FormValidator } from "../components/FormValidator";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import PopupWithSubmit from "../components/PopupWithSubmit";
import { Section } from "../components/Section";
import { UserInfo } from "../components/UserInfo";

import {
  galleryWrap,
  avatarPopup,
  addCardPopup,
  profilePopup,
  openImgView,
  templateSelector,
  profileSpanArray,
  openAvatarPopup,
  openProfilePopup,
  openImgAddPopup,
  settings,
  nameInput,
  aboutInput,
  avatarInput,
  api,
} from "../utilities/constants";

const confirmPopup = new PopupWithSubmit(".popup_type_delete");

confirmPopup.setEventListeners();

let userId;

const section = new Section((data) => {
  renderCard(data);
}, galleryWrap);

const renderCard = (data) => {
  section.addItem(createCard(data));
};

//functions/////////////////////////////

const userInfo = new UserInfo(profileSpanArray);
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cardsData]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      nameInput: userData.name,
      aboutInput: userData.about,
    });
    userInfo.setAvatar(userData.avatar);
    section.renderInitialItems(cardsData);
  })
  .catch((err) => console.log(`Error somthing went wrong. ${err}`));

const submitProfileFormInputs = (data) => {
  profileForm.renderLoading(true, " Adding...");
  api
    .setUserInfo({ name: data.name, about: data.about, avatar: data.avatar })
    .then((data) => {
      userInfo.setUserInfo({
        nameInput: data.name,
        aboutInput: data.about,
        avatarInput: data.avatar,
      });
      userInfo.setAvatarInfo(data.avatar);
      profileForm.close();
    })
    .catch((err) => console.log(`Error somthing went wrong. ${err}`))
    .finally(() => {
      profileForm.renderLoading(false);
    });
};

const createCard = (data) => {
  const card = new Card(
    data,
    userId,
    templateSelector,
    (name, link) => {
      popupWithImage.open(name, link);
    },
    (id) => {
      if (card.isLiked()) {
        api
          .dislikeCard(id)
          .then((res) => {
            card.setLikes(res.likes);
            card.removeLike();
          })
          .catch((err) => console.log(`Error somthing went wrong. ${err}`));
      } else {
        api
          .likeCard(id)
          .then((res) => {
            card.setLikes(res.likes);
            card.addLike();
          })
          .catch((err) => console.log(`Error somthing went wrong. ${err}`));
      }
    },
    (cardId) => {
      confirmPopup.open();
      confirmPopup.setAction(() => {
        api
          .deleteCard(cardId)
          .then((res) => {
            card.removeCard();
            confirmPopup.close();
          })
          .catch((err) => console.log(`Error somthing went wrong. ${err}`))
          .finally(() => {});
      });
    }
  );
  return card.createCard();
};

const addCardForm = new PopupWithForm(addCardPopup, (data) => {
  addCardForm.renderLoading(true, "Saving...");
  api
    .addCard({ name: data.title, link: data.link })
    .then((res) => {
      renderCard(res, galleryWrap);
      addCardForm.close();
    })
    .catch((err) => console.log(`Error somthing went wrong. ${err}`))
    .finally(() => {
      addCardForm.renderLoading(false);
    });
});

const formValidators = {};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formEl) => {
    const validator = new FormValidator(settings, formEl);
    const formName = formEl.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

const resetAvatarForm = () => {
  formValidators[formAvatar.getAttribute("name")].resetValidation();
};
const resetImgAddForm = () => {
  formValidators[formImg.getAttribute("name")].resetValidation();
};
const handleAvatarSubmit = (data) => {
  profileAvatar.renderLoading(true, "Changing...");
  api
    .editAvatar(data.url)
    .then((res) => {
      userInfo.setAvatar(res.avatar);
    })
    .catch((err) => console.log(`Error somthing went wrong. ${err}`))
    .finally(() => {
      profileAvatar.renderLoading(false);
    });
};

const handleProfileFormInputs = () => {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
};

const resetAndOpenProfileForm = () => {
  formValidators[formProfile.getAttribute("name")].resetValidation();
  const profileData = userInfo.getUserInfo();
  handleProfileFormInputs(profileData);
  profileForm.open();
};

enableValidation();

//classes////////////////////////////////////////
/////////////////////////////////////////////////

const popupWithImage = new PopupWithImage(openImgView);
popupWithImage.setEventListeners();

const profileForm = new PopupWithForm(profilePopup, submitProfileFormInputs);
profileForm.setEventListeners();

const profileAvatar = new PopupWithForm(avatarPopup, (data) => {
  handleAvatarSubmit(data);
  profileAvatar.close();
});

//listeners//////////
/////////////////////

openImgAddPopup.addEventListener("click", () => {
  resetImgAddForm();
  addCardForm.setEventListeners();
  addCardForm.open();
});

openProfilePopup.addEventListener("click", () => {
  resetAndOpenProfileForm();
});
profileAvatar.setEventListeners();

openAvatarPopup.addEventListener("click", () => {
  resetAvatarForm();
  profileAvatar.open();
});
