const popup = document.querySelector(".popup");

const popForm = document.querySelector(".form");
const editButton = document.querySelector(".text__edit");
const closeEditButton = document.querySelector(".popup__close");

const plusBoxOpen = document.querySelector(".top__plus-box");
const plusBoxClose = document.querySelector(".popup__close");

let saveCreate = document.querySelector(".form__button");

let galleryUl = document.querySelector(".gallery");
let galleryLi = document.querySelector(".gallery__item");

let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");
let popupTitle = document.querySelector(".popup__title");

let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

let Gallery = [
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

Gallery.forEach((i) => {
  const galleryItem = document.querySelector("#gallery__item").content;
  const galleryLi = galleryItem.querySelector(".gallery__item").cloneNode(true);

  //this f iterates appends each template li to ul

  let itemTitle = galleryLi.querySelector(".desc__text");
  let itemImage = galleryLi.querySelector(".gallery__img");
  const galleryImgAll = galleryLi.querySelectorAll(".gallery__img");
  itemImage.src = i.link;
  itemTitle.textContent = i.title;
  galleryUl.append(galleryLi);
  galleryImgAll.forEach((img) => {
    let zoomContent = document.querySelector(".zoom__img");
    img.addEventListener("click", function (event) {
      zoomContent.src = event.target.src;
      openImg();
    });
  });
});

let itemBin = document.querySelectorAll(".gallery__bin");
itemBin.forEach((bin) => {
  bin.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
});
let heartLike = document.querySelectorAll(".desc__heart");
heartLike.forEach((heart) => {
  heart.addEventListener("click", function (event) {
    event.target.classList.toggle("button_liked");
  });
});
//function: form / gallery edit popup

const openform = () => {
  popupTitle.textContent = "Edit Profile";
  saveCreate.textContent = "Save";
  nameInput.placeholder = "";
  occupationInput.placeholder = "";
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
  occupation.type = "text";
  popup.classList.add("popup_open");
};

const galleryEditOpen = () => {
  popupTitle.textContent = "New place";
  saveCreate.textContent = "Create";
  nameInput.placeholder = "Title";
  nameInput.value = "";
  occupationInput.value = "";
  occupationInput.placeholder = "Link";
  popup.classList.add("popup_open");
};
//function: popup close
const closeform = () => {
  popup.classList.remove("popup_open");
};

let saveEdit = (e) => {
  if (saveCreate.textContent === "Save") {
    e.preventDefault();
    textName.textContent = nameInput.value;
    occupation.textContent = occupationInput.value;
    closeform();
  } else if (saveCreate.textContent === "Create") {
    e.preventDefault();
    const galleryItem = document.querySelector("#gallery__item").content;
    const galleryLi = galleryItem
      .querySelector(".gallery__item")
      .cloneNode(true);
    let itemTitle = galleryLi.querySelector(".desc__text");
    let itemImage = galleryLi.querySelector(".gallery__img");
    let itemBin = galleryLi.querySelectorAll(".gallery__bin");
    let heartLike = galleryLi.querySelectorAll(".desc__heart");
    itemTitle.textContent = nameInput.value;
    itemImage.src = `"${occupationInput.value}"`;
    galleryUl.prepend(galleryLi);
    closeform();
    itemBin.forEach((bin) => {
      bin.addEventListener("click", function (event) {
        event.target.parentElement.remove();
      });
    });
    heartLike.forEach((heart) => {
      heart.addEventListener("click", function (event) {
        event.target.classList.toggle("button_liked");
      });
    });
  }
};

saveCreate.addEventListener("click", saveEdit);
editButton.addEventListener("click", openform);
plusBoxOpen.addEventListener("click", galleryEditOpen);
closeEditButton.addEventListener("click", closeform);

const zoomed = document.querySelector(".zoom");
let galleryImgAll = document.querySelectorAll(".gallery__img");
let galleryImg = document.querySelector(".gallery__img");

const openImg = () => {
  zoomed.classList.add("zoom_open");
};

galleryImgAll.forEach((img) => {
  let zoomContent = document.querySelector(".zoom__img");
  img.addEventListener("click", function (event) {
    zoomContent.src = event.target.src;
    openImg();
  });
});

zoomed.addEventListener("click", function (event) {
  event.target.classList.remove("zoom_open");
});
