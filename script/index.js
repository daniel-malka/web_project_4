import { itemsValidChecker, hideAllErrors, disableButton } from "./validate.js";
//img-view popup + child refs
const imgViewPopup = document.querySelector(".popup_type_zoom");

const imgViewElement = imgViewPopup.querySelector(".popup__img");
const imgViewParagraph = imgViewPopup.querySelector(".popup__alt");

//popup profile + child refs
const profilePopup = document.querySelector(".popup_type_profile");

const openProfileEditButton = document.querySelector(".text__edit");
const textName = document.querySelector(".text__name");
const occupation = document.querySelector(".text__occu");

//card add popup + child refs

const imgAddPopup = document.querySelector(".popup_type_card");
const openImgAddPopup = document.querySelector(".top__plus-box");

//
const closeButtons = document.querySelectorAll(".popup__close");
//forms//
//profile
const profileForm = document.forms.formProfile;
const formNameInput = profileForm.elements.name;
const formOccupationInput = profileForm.elements.occupation;

//add card
const cardAddForm = document.forms.formImg;
const formTitleInput = cardAddForm.elements.title;
const formLinkInput = cardAddForm.elements.link;

//gallery referance
const galleryContent = document.querySelector(".gallery");
const galleryTemplate = document.querySelector("#gallery__item").content;

const initialGallery = [
  {
    title: "Kenai Fjords interational Park",
    link: "https://images.unsplash.com/photo-1633967920376-33b2d94f091f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "frozen lake, Kenai Fjords",
  },
  {
    title: "Yellowlinkne National Park",
    link: "https://images.unsplash.com/photo-1607550295261-851fa60d8ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    alt: "hot springs view Yellowstone park",
  },
  {
    title: "Niagara Falls",
    link: "https://images.unsplash.com/photo-1598402453861-4fbcbf6ced3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    alt: "niagra falls bird view",
  },
  {
    title: "Zion National Park",
    link: "https://images.unsplash.com/photo-1502746663084-14b59b6924f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "deset hill zion park",
  },
  {
    title: "Kauai islands",
    link: "https://images.unsplash.com/photo-1638401604765-47daaa5a6c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
    alt: "kauai horizon view",
  },
  {
    title: "Grand Canyon",
    link: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    alt: "grand canyon desert view",
  },
];
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

const resetAndOpenProfilePopup = (popup) => {
  hideAllErrors(popup, itemsValidChecker);
  fillProfileInputs();
  openPopup(popup);
};

const resetAndOpenImgAddPopup = (popup) => {
  hideAllErrors(popup, itemsValidChecker);
  disableButton(imgAddPopup, itemsValidChecker);
  cardAddForm.reset();
  openPopup(popup);
};

//open popupps
const openPopup = (popup) => {
  popup.classList.add("popup_open");
  document.addEventListener("mousedown", handleOverlay);
  document.addEventListener("keydown", handleEscKey);
};
//rendercard
const renderCard = (card) => {
  const cardElement = createCard(card);
  galleryContent.prepend(cardElement);
};
//create card
const createCard = (card) => {
  const galleryItem = galleryTemplate
    .querySelector(".gallery__item")
    .cloneNode(true);
  const galleryImg = galleryItem.querySelector(".gallery__img");
  const galleryText = galleryItem.querySelector(".desc__text");
  //img view
  galleryImg.addEventListener("click", (evt) => {
    imgViewElement.src = evt.target.src;
    imgViewElement.alt = evt.target.alt;
    imgViewParagraph.textContent =
      evt.target.parentElement.querySelector(".desc__text").textContent;
    openPopup(imgViewPopup);
  });
  //card remover
  galleryItem.querySelector(".gallery__bin").addEventListener("click", () => {
    galleryItem.remove();
  });
  //heart like toggler
  galleryItem
    .querySelector(".desc__heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("button_liked");
    });
  galleryText.textContent = card.title;
  galleryImg.src = card.link;
  galleryImg.alt = card.alt;
  return galleryItem;
};

//initial cards
initialGallery.forEach((card) => {
  renderCard(card);
});

/////////////////////////////
///////////functions/////////

//close popup func
const closePopup = (popup) => {
  popup.classList.remove("popup_open");
  document.removeEventListener("mousedown", handleOverlay);
  document.removeEventListener("keydown", handleEscKey);
};

//submit func
const fillProfileInputs = () => {
  formNameInput.value = textName.textContent;
  formOccupationInput.value = occupation.textContent;
};

//submit func
const submitProfile = () => {
  textName.textContent = formNameInput.value;
  occupation.textContent = formOccupationInput.value;
  closePopup(profilePopup);
};

const submitCard = () => {
  renderCard({
    link: formLinkInput.value,
    alt: `Photo of: ${formTitleInput.value}`,
    title: formTitleInput.value,
  });

  closePopup(imgAddPopup);
};

////listeners
//open
openProfileEditButton.addEventListener("click", () =>
  resetAndOpenProfilePopup(profilePopup)
);
openImgAddPopup.addEventListener("click", () =>
  resetAndOpenImgAddPopup(imgAddPopup)
);

// submit listeners
cardAddForm.addEventListener("submit", submitCard);
profileForm.addEventListener("submit", submitProfile);

////closers
// closePopup(profilePopup)
closeButtons.forEach((button) => {
  const closestParent = button.closest(".popup");
  button.addEventListener("click", () => closePopup(closestParent));
});
