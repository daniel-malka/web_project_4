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
