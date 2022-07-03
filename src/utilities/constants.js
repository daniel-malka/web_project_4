const galleryWrap = ".gallery";
const addCardPopup = ".popup_type_card";
const profilePopup = ".popup_type_profile";
const openImgView = ".popup_type_zoom";
const nameInput = document.forms.formProfile.elements.name;
const occupationInput = document.forms.formProfile.elements.occupation;
const templateSelector = "#gallery__item";
const spanArray = {
  nameSelector: ".text__name",
  occupationSelector: ".text__occupation",
};
const openProfileEditButton = document.querySelector(".text__edit");
const openImgAddPopup = document.querySelector(".top__plus-box");
//settings
const settings = {
  inputSelector: ".fieldset__input",
  buttonSelector: ".fieldset__button",
  buttonDisable: "fieldset__button_disabled",
  inputErrorClass: "fieldset__input_error",
  spanErrorClass: "fieldset__error-message-active",
};
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
export {
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
};
