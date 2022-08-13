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
const renderCard = (data) => {
  const card = createCard(data);

  section.addItem(card);
};
//functions/////////////////////////////
////////////////////////////////////////
const userInfo = new UserInfo(profileSpanArray);

api.getUserInfo().then((res) => {
  console.log(res);
  userInfo.setUserInfo({ nameInput: res.name, aboutInput: res.about });
});

api
  .getCardsInfo()
  .then((res) => {
    section.renderItems(res);
  })
  .catch(console.log());

const submitProfileFormInputs = (data) => {
  api
    .setUserInfo(data.name, data.about)
    .then((data) => {
      console.log(data);
      userInfo.setUserInfo({ nameInput: data.name, aboutInput: data.about });
    })
    .catch((err) => console.log(err, "sommthing went wrong"))
    .finally(() => {
      profileForm.close();
    });
};
const section = new Section({ renderer: renderCard }, galleryWrap);

// fetch("https://around.nomoreparties.co/v1/cohort-3-en/cards")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     section.renderItems(res);
//   });

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
const handleProfileFormInputs = (data) => {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
};

const resetAndOpenProfileForm = () => {
  formValidators[formProfile.getAttribute("name")].resetValidation();
  const profileData = userInfo.getUserInfo();
  console.log(profileData);
  handleProfileFormInputs(profileData);
  profileForm.open();
};

const createCard = (data) => {
  const card = new Card(data, templateSelector, (name, link) => {
    popupWithImage.open(name, link);
  });
  return card.createCard();
};

enableValidation();

//classes////////////////////////////////////////
/////////////////////////////////////////////////

const popupWithImage = new PopupWithImage(openImgView);
popupWithImage.setEventListeners();

const profileForm = new PopupWithForm(profilePopup, submitProfileFormInputs);
profileForm.setEventListeners();

const addCardForm = new PopupWithForm(addCardPopup, (data) => {
  api
    .getCardsInfo()
    .then((res) => {
      section.renderItems(res);
    })
    .catch(console.log);

  renderCard(
    {
      name: data.name,
      link: data.link,
    },
    galleryWrap
  );
  addCardForm.close();
});
addCardForm.setEventListeners();

//listeners//////////
/////////////////////

openImgAddPopup.addEventListener("click", () => resetAndOpenImgAddForm());

openProfileEditButton.addEventListener("click", () => {
  resetAndOpenProfileForm();
});
