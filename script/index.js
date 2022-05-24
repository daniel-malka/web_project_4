import { closePopup } from "./utilities.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidate.js";

const cardAddForm = document.forms.formImg;
const profileForm = document.forms.formProfile;
const formNameInput = profileForm.elements.name;
const formOccupationInput = profileForm.elements.occupation;
const profileFormValidator = new FormValidator(profileForm);
const imgAddFormValidator = new FormValidator(cardAddForm);
profileFormValidator.enableValidation();
imgAddFormValidator.enableValidation();

//popup profile + child refs
const profilePopup = document.querySelector(".popup_type_profile");
const textName = document.querySelector(".text__name");
const occupation = document.querySelector(".text__occu");
//card add popup + child refs

//forms
const formTitleInput = cardAddForm.elements.title;
const formLinkInput = cardAddForm.elements.link;

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

//rendercard
const renderCard = (data, templateElement) => {
  const newCard = new Card(data, templateElement);
  const createCardElement = newCard.createCard();
  galleryContent.prepend(createCardElement);
};
//create card

//initial cards
initialGallery.forEach((card) => {
  renderCard(card, "#gallery__item");
});

/////////////////////////////
///////////functions/////////

//close popup func

//submit func
const handleProfileFormInputs = () => {
  textName.textContent = formNameInput.value;
  occupation.textContent = formOccupationInput.value;
};
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
  const imgAddPopup = document.querySelector(".popup_type_card");
  closePopup(imgAddPopup);
};
cardAddForm.addEventListener("submit", submitCard);
profileForm.addEventListener("submit", submitProfile);

////listeners
//open
