//profile popup + child refs
const profilePopup = document.querySelector(".popup_type_profile");
const openProfileEditButton = document.querySelector(".text__edit");
const closeProfileEditButton = document.querySelector(
  ".popup__close_type_profile"
);
const nameInput = document.querySelector(".form__input_type_name");
const occupationInput = document.querySelector(".form__input_type_occu");
const textName = document.querySelector(".text__name");
const occupation = document.querySelector(".text__occu");
const sumbitEditProfile = document.querySelector(".form__button_type_save");
const profileForm = document.querySelector(".form_type_profile");
const imgAddForm = document.querySelector(".form_type_img-add");

//addimg popup+ child refs
const imgAddPopup = document.querySelector(".popup_type_addImg");
const openImgAddPopup = document.querySelector(".top__plus-box");
const closeImgAddButton = document.querySelector(".popup__close_type_img-add");
const sumbitAddImgPopup = document.querySelector(".form__button_type_create");
const titleInput = document.querySelector(".form__input_type_title");
const linkInput = document.querySelector(".form__input_type_link");

//view img popup + child refs
const imgViewPopup = document.querySelector(".zoom");
const imgViewContent = document.querySelector(".zoom__img");
const imgViewParagraph = document.querySelector(".zoom__alt");
const imgViewClose = document.querySelector(".zoom__close");

//img popup form reference for reset
const imgPopForm = document.querySelector(".form_type_img-add");

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
//open popupps
const openPopup = (popup) => {
  popup.classList.add("popup_open");
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
  galleryImg.addEventListener("click", (event) => {
    imgViewContent.src = event.target.src;
    imgViewContent.alt = event.target.alt;
    imgViewParagraph.textContent =
      event.target.parentElement.querySelector(".desc__text").textContent;
    openPopup(imgViewPopup);
  });
  //card remover
  galleryItem
    .querySelector(".gallery__bin")
    .addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  //heart like toggler
  galleryItem
    .querySelector(".desc__heart")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("button_liked");
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
};

//submit func
const submitProfilePopup = (e) => {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  closePopup(profilePopup);
};
const submitImgAddPopup = (e) => {
  e.preventDefault();
  renderCard({
    link: linkInput.value,
    alt: `Photo of: ${titleInput.value}`,
    title: titleInput.value,
  });
  closePopup(imgAddPopup);
  imgPopForm.reset();
};

////listeners
//open
openProfileEditButton.addEventListener("click", () => openPopup(profilePopup));
openImgAddPopup.addEventListener("click", () => openPopup(imgAddPopup));

//close
closeProfileEditButton.addEventListener("click", () =>
  closePopup(profilePopup)
);

closeImgAddButton.addEventListener("click", () => closePopup(imgAddPopup));

imgViewClose.addEventListener("click", () => closePopup(imgViewPopup));

// submit listeners
sumbitAddImgPopup.addEventListener("click", submitImgAddPopup);
sumbitEditProfile.addEventListener("click", submitProfilePopup);
