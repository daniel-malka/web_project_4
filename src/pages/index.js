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
  nameInput,
  occupationInput,
  templateSelector,
  spanArray,
  openProfileEditButton,
  openImgAddPopup,
  settings,
  initialGallery,
} from "../components/constants";
//functions/////////////////////////////
////////////////////////////////////////

initialGallery.reverse();

const submiteProfileFormInputs = (data) => {
  userInfo.setUserInfo(data);
};

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
  profileForm.setInputValues(data);
};

const resetAndOpenProfileForm = () => {
  formValidators[formProfile.getAttribute("name")].resetValidation();
  const profileData = userInfo.getUserInfo();
  handleProfileFormInputs(profileData);
  profileForm.open();
};

const createCard = (data) => {
  const card = new Card(data, templateSelector, (title, link) => {
    popupWithImage.open(title, link);
  });
  return card.createCard();
};
const renderCard = (data, cardselector) => {
  const card = createCard(data);
  section.addItem(card);
};
enableValidation();

//classes////////////////////////////////////////
/////////////////////////////////////////////////
const userInfo = new UserInfo(spanArray);

const popupWithImage = new PopupWithImage(openImgView);
popupWithImage.setEventListeners();

const profileForm = new PopupWithForm(profilePopup, submiteProfileFormInputs);
profileForm.setEventListeners();

const addCardForm = new PopupWithForm(addCardPopup, (data) => {
  renderCard(
    {
      title: data.title,
      link: data.link,
    },
    galleryWrap
  );
  addCardForm.close();
});
addCardForm.setEventListeners();

const section = new Section(
  { items: initialGallery, renderer: renderCard },
  galleryWrap
);
section.renderItems();
//listeners//////////
/////////////////////

openImgAddPopup.addEventListener("click", () => resetAndOpenImgAddForm());

openProfileEditButton.addEventListener("click", () => {
  resetAndOpenProfileForm();
});
