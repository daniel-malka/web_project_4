import { FormValidator } from "./FormValidate.js";
const cardAddForm = document.forms.formImg;
const profileForm = document.forms.formProfile;
const closeButtons = document.querySelectorAll(".popup__close");
const openProfileEditButton = document.querySelector(".text__edit");
const openImgAddPopup = document.querySelector(".top__plus-box");
openProfileEditButton.addEventListener("click", () =>
  resetAndOpenProfileForm()
);
openImgAddPopup.addEventListener("click", () => resetAndOpenImgAddForm());

// submit listeners
const imgViewPopup = document.querySelector(".popup_type_zoom");
const profilePopup = document.querySelector(".popup_type_profile");
const imgAddPopup = document.querySelector(".popup_type_card");
////closers
// closePopup(profilePopup)
closeButtons.forEach((button) => {
  const closestParent = button.closest(".popup");
  button.addEventListener("click", () => closePopup(closestParent));
});
const resetAndOpenProfileForm = () => {
  const ProfileForm = new FormValidator(profileForm);
  ProfileForm.resetProfilePopup();
  openPopup(profilePopup);
};
const resetAndOpenImgAddForm = () => {
  const cardForm = new FormValidator(cardAddForm);
  cardForm.resetImgAddPopup();
  openPopup(imgAddPopup);
};
const handleOverlay = (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
};

const handleEscKey = (evt) => {
  if (evt.key == "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  } else {
  }
};

//open popupps
export const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("mousedown", handleOverlay);
  document.addEventListener("keydown", handleEscKey);
};

export const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("mousedown", handleOverlay);
  document.removeEventListener("keydown", handleEscKey);
};
