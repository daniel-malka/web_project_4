import { closePopup, openPopup } from "./Utilities.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
//forms
const cardAddForm = document.forms.formImg;
const profileForm = document.forms.formProfile;
const formTitleInput = cardAddForm.elements.title;
const formLinkInput = cardAddForm.elements.link;
const formNameInput = profileForm.elements.name;
const formOccupationInput = profileForm.elements.occupation;

//popups
const imgAddPopup = document.querySelector(".popup_type_card");
const profilePopup = document.querySelector(".popup_type_profile");
const textName = document.querySelector(".text__name");
const textOccupation = document.querySelector(".text__occu");
//buttons
const openProfileEditButton = document.querySelector(".text__edit");
const openImgAddPopup = document.querySelector(".top__plus-box");
const closeButtons = document.querySelectorAll(".popup__close");
//settings
const settings = {
  inputSelector: ".fieldset__input",
  buttonSelector: ".fieldset__button",
  buttonDisable: "fieldset__button_disabled",
  inputErrorClass: "fieldset__input_error",
  spanErrorClass: "fieldset__error-message-active",
};
//pre calls each form
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

enableValidation();

//forms

const handleProfileInputs = () => {
  formNameInput.value = textName.textContent;
  formOccupationInput.value = textOccupation.textContent;
};

const handleProfileFormInputs = () => {
  textName.textContent = formNameInput.value;
  textOccupation.textContent = formOccupationInput.value;
};

const resetAndOpenProfileForm = () => {
  handleProfileInputs();
  formValidators[profileForm.getAttribute("name")].resetValidation();
  openPopup(profilePopup);
};
openProfileEditButton.addEventListener("click", () =>
  resetAndOpenProfileForm()
);

const resetAndOpenImgAddForm = () => {
  formValidators[cardAddForm.getAttribute("name")].resetValidation();

  openPopup(imgAddPopup);
};
//gallery referance
const galleryContent = document.querySelector(".gallery");
const initialGallery = [
  {
    title: "Kenai Fjords interational Park",
    link: "https://images.unsplash.com/photo-1633967920376-33b2d94f091f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Yellowlinkne National Park",
    link: "https://images.unsplash.com/photo-1607550295261-851fa60d8ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    title: "Niagara Falls",
    link: "https://images.unsplash.com/photo-1598402453861-4fbcbf6ced3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Zion National Park",
    link: "https://images.unsplash.com/photo-1502746663084-14b59b6924f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Kauai islands",
    link: "https://images.unsplash.com/photo-1638401604765-47daaa5a6c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
  },
  {
    title: "Grand Canyon",
    link: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
  },
];
initialGallery.reverse();
//renders
const renderCard = (data, templateElement) => {
  const newCardElement = createCard(data, templateElement);
  galleryContent.prepend(newCardElement);
};

//create card
const createCard = (data, templateElement) => {
  const card = new Card(data, templateElement);
  return card.createCard();
};

//initial cards
initialGallery.forEach((card) => {
  renderCard(card, "#gallery__item");
});

//close popup func

//submit func
const submitProfile = () => {
  handleProfileFormInputs();
  closePopup(profilePopup);
};

const submitCard = () => {
  renderCard(
    { link: formLinkInput.value, title: formTitleInput.value },
    "#gallery__item"
  );
  closePopup(imgAddPopup);
};

openImgAddPopup.addEventListener("click", () => resetAndOpenImgAddForm());
closeButtons.forEach((button) => {
  const closestParent = button.closest(".popup");
  button.addEventListener("click", () => closePopup(closestParent));
});
cardAddForm.addEventListener("submit", submitCard);
profileForm.addEventListener("submit", submitProfile);
