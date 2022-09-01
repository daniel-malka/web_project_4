import "./index.css";
import { Card } from "../components/Card";
import { FormValidator } from "../components/FormValidator";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import PopupWithSubmit from "../components/PopupWithSubmit";
import { Section } from "../components/Section";
import { UserInfo } from "../components/UserInfo";
import { api } from "../components/Api";
import {
  galleryWrap,
  avatarPopup,
  addCardPopup,
  profilePopup,
  openImgView,
  templateSelector,
  profileSpanArray,
  openProfilePopup,
  openImgAddPopup,
  settings,
  nameInput,
  aboutInput,
  avatarInput,
} from "../utilities/constants";
import { data } from "autoprefixer";
const confirmPopup = new PopupWithSubmit(".popup__type_delete");
confirmPopup.setEventListeners();
let userId;
const section = new Section((data) => {
  renderCard(data);
}, galleryWrap);

const renderCard = (data) => {
  section.addItem(createCard(data));
};
//functions/////////////////////////////
////////////////////////////////////////
const userInfo = new UserInfo(profileSpanArray);
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cardsData]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      nameInput: userData.name,
      aboutInput: userData.about,
    });
    userInfo.setAvatarInfo(userData.avatar);
    section.renderInitialItems(cardsData);
  })
  .catch(console.log);
const submitProfileFormInputs = (data) => {
  api
    .setUserInfo({ name: data.name, about: data.about, avatar: data.avatar })
    .then((data) => {
      userInfo.setUserInfo({
        nameInput: data.name,
        aboutInput: data.about,
      });
      userInfo.setAvatarInfo(avatar);
    })
    .catch((err) => console.log(err, "something went wrong.. =/"))
    .finally(() => {
      profileForm.close();
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
      const isLiked = card.isLiked();
      if (isLiked) {
        api
          .dislikeCard(id)
          .then((res) => {
            card.setLikes(res.likes);
            card.removeLike();
          })
          .catch(console.log());
      } else {
        api.likeCard(id).then((res) => {
          card.setLikes(res.likes);
          card.addLike();
        });
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
          .catch(console.log());
      });
    }
  );
  return card.createCard();
};

const addCardForm = new PopupWithForm(addCardPopup, (data) => {
  api
    .addCard({ name: data.title, link: data.link })
    .then((res) => {
      renderCard(res, galleryWrap);
      addCardForm.close();
    })
    .catch(console.log);
});

const formValidators = {
  formAvatar: "formAvatar",
  formImg: "formImg",
  formProfile: "formProfile",
};
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formEl) => {
    const validator = new FormValidator(settings, formEl);
    const formName = formEl.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
const resetAndOpenAvatarForm = () => {
  formValidators[formAvatar.getAttribute("name")].resetValidation();
};
const handleAvatarSubmit = (data) => {
  console.log(data);
  api.editAvatar(data.link).then((res) => {
    console.log(res);
    userInfo.setAvatarInfo(res.avatar);
  });
};

const resetAndOpenImgAddForm = () => {
  formValidators[formImg.getAttribute("name")].resetValidation();
  addCardForm.open();
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
});

addCardForm.setEventListeners();

//listeners//////////
/////////////////////

openImgAddPopup.addEventListener("click", () => resetAndOpenImgAddForm());

openProfilePopup.addEventListener("click", () => {
  resetAndOpenProfileForm();
});
profileAvatar.setEventListeners();
document
  .querySelector(profileSpanArray.avatar)
  .addEventListener("click", () => {
    resetAndOpenAvatarForm();
    profileAvatar.open();
  });
