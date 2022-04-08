//form form

const popForm = document.querySelector("form");

//popbox toggle target

const popup = document.querySelector(".popup");

//plus box toggle target

const plusPopup = document.querySelector(".plusPopup");
//gallery UL
const galleryUl = document.querySelector(".gallery");
//form inputs

let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");
let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

//galleryUL/li

//initial gallery
const initialGallery = [
  {
    title: "Kenai Fjordlinkational Park",
    link: "../images/KenaiFjords.jpg",
  },
  {
    title: "Yellowlinkne National Park",
    link: "../images/YellowStone2.jpg",
  },
  {
    title: "Niagara Falls",
    link: "../images/niagra_falls2.jpg",
  },
  {
    title: "Zion National Park",
    link: "../images/zion_Park2.jpg",
  },
  {
    title: "Kauai islands",
    link: "../images/kauaii.jpg",
  },
  {
    title: "Grand Canyon",
    link: "../images/GrandCanyon.jpg",
  },
];

//form buttons
const openformButton = document.querySelector(".text__edit");
const closeformButton = document.querySelector(".popup__button");

//plus box buttons
const plusBoxOpen = document.querySelector(".top__plus-box");
const plusBoxClose = document.querySelector(".plusPopup__button");

//image/title inputs

//image create button
const imageAppend = () => {
  let galleryItem = document
    .querySelector("#gallery__item")
    .content.querySelector(".gallery__item");
  let galleryElement = galleryItem.cloneNode(true);
  let itemTitle = galleryElement.querySelector(".desc__text");
  let itemImage = galleryElement.querySelector(".gallery__img");
  let titleInput = document.querySelector(".plusPopup__input_type_title");
  let linkInput = document.querySelector(".plusPopup__input_type_link");
  itemImage.src = linkInput.value;
  itemTitle.textContent = titleInput.value;
  galleryUl.prepend(galleryElement);
  imageAppendClose();
};
//loop: gllery initial items
initialGallery.forEach((i) => {
  const galleryItem = document
    .querySelector("#gallery__item")
    .content.querySelector(".gallery__item");

  //this f iterates appends each template li to ul
  const galleryElement = galleryItem.cloneNode(true);
  let itemTitle = galleryElement.querySelector(".desc__text");
  let itemImage = galleryElement.querySelector(".gallery__img");

  itemImage.src = i.link;
  itemTitle.textContent = i.title;
  galleryUl.append(galleryElement);
});

//like buttons
const likeButton = document.querySelectorAll(".desc__button");
const addImageButton = document.querySelector(".plusPopup__button-create");

// const imageRemove;
// this function needs to delete the target's.parent

//function: form open/close/submit
const openform = () => {
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
  popup.classList.add("popup_open");
};

const closeform = () => {
  popup.classList.remove("popup_open");
};

const submitForm = (e) => {
  e.preventDefault();
  textName.textContent = nameInput.value;
  occupation.textContent = occupationInput.value;
  popup.classList.remove("popup_open");
};

//function:image pop open/close

const imageAppendOpen = () => {
  plusPopup.classList.add("plusPopup_open");
};

const imageAppendClose = () => {
  plusPopup.classList.remove("plusPopup_open");
};

//form event listeners
openformButton.addEventListener("click", openform);

closeformButton.addEventListener("click", closeform);

popForm.addEventListener("submit", submitForm);

//plus boxevent listener

plusBoxOpen.addEventListener("click", imageAppendOpen);
plusBoxClose.addEventListener("click", imageAppendClose);
addImageButton.addEventListener("click", imageAppend);

//like event listener

likeButton.forEach((heart) => {
  const liked = () => {
    heart.classList.toggle("button_liked");
  };
  heart.addEventListener("click", liked);
});
