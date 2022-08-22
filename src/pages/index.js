import "./index.css";
import { Card } from "../components/Card";
import { FormValidator } from "../components/FormValidator";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { Section } from "../components/Section";
import { UserInfo } from "../components/UserInfo";
import {
  galleryWrap,
  addCardPopup,
  profilePopup,
  openImgView,
  templateSelector,
  profileSpanArray,
  openProfileEditButton,
  openImgAddPopup,
  settings,
  nameInput,
  aboutInput,
} from "../utilities/constants";
import { api } from "../components/Api";
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
Promise.all([api.getUserInfo(), api.getCardsInfo()])
  .then(([userData, cardsData]) => {
    // sectionNew = new Section(
    //     {
    //         items: cardsData,
    //         renderer: (data) => {
    //             renderCard(data);
    //         },
    //     },
    //     galleryWrap
    userId = userData._id;
    userInfo.setUserInfo({
      nameInput: userData.name,
      aboutInput: userData.about,
    });
    section.renderInitialItems(cardsData);
  })
  .catch(console.log);
const submitProfileFormInputs = (data) => {
  api
    .setUserInfo({ name: data.name, about: data.about })
    .then((data) => {
      console.log(data);
      userInfo.setUserInfo({
        nameInput: data.name,
        aboutInput: data.about,
      });
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
    () => {
      api.addLike(card.getId()).then((res) => {
        //fill like
        card.setLikes(res.likes);
        console.log();
      });
    }
  );
  return card.createCard();
};

const addCardForm = new PopupWithForm(addCardPopup, (data) => {
  api
    .addCard({ name: data.name, link: data.link })
    .then((res) => {
      renderCard(
        {
          name: res.name,
          link: res.link,
        },
        galleryWrap
      );
      addCardForm.close();
    })
    .catch(console.log);
});

const formValidators = { formImg: "formImg", formProfile: "formProfile" };
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formEl) => {
    const validator = new FormValidator(settings, formEl);
    const formName = formEl.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
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

addCardForm.setEventListeners();

//listeners//////////
/////////////////////

openImgAddPopup.addEventListener("click", () => resetAndOpenImgAddForm());

openProfileEditButton.addEventListener("click", () => {
  resetAndOpenProfileForm();
});
