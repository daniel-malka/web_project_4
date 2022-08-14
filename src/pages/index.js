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
  console.log(res.name);
  userInfo.setUserInfo({ nameInput: res.name, aboutInput: res.about });
});

api
  .getCardsInfo()
  .then((res) => {
    section.renderItems(res);
  })
  .catch(console.log());

const submitProfileFormInputs = (data) => {
  console.log;
  api
    .setUserInfo({ name: data.name, about: data.about })
    .then((data) => {
      userInfo.setUserInfo({
        name: data.name,
        about: data.about,
      });
    })
    .catch((err) => console.log(err, "something went wrong.. =/"))
    .finally(() => {
      profileForm.close();
    });
};
const section = new Section({ renderer: renderCard }, galleryWrap);

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
  console.log(name, about);
  nameInput.value = name;
  aboutInput.value = about;
};

const resetAndOpenProfileForm = () => {
  formValidators[formProfile.getAttribute("name")].resetValidation();
  const profileData = userInfo.getUserInfo();
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
