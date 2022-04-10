const popup = document.querySelector(".popup");
const popForm = document.querySelector(".form");
//open popup
const editButton = document.querySelector(".text__edit");
const plusBoxOpen = document.querySelector(".top__plus-box");
//close popup
const closeEditButton = document.querySelector(".popup__close");
const zoomClose = document.querySelector(".zoom__close");
const plusBoxClose = document.querySelector(".popup__close");

//sumbit popup
let saveCreate = document.querySelector(".form__button");

let galleryUl = document.querySelector(".gallery");
let galleryLi = document.querySelector(".gallery__item");
let galleryImg = document.querySelectorAll(".gallery__img");

let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");
let popupTitle = document.querySelector(".popup__title");

let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");

let Gallery = [
  {
    title: "Kenai Fjords interational Park",
    link: "../images/KenaiFjords.jpg",
    alt: "frozen lake, Kenai Fjords",
  },
  {
    title: "Yellowlinkne National Park",
    link: "../images/YellowStone2.jpg",
    alt: "hot springs view Yellowstone park",
  },
  {
    title: "Niagara Falls",
    link: "../images/niagra_falls2.jpg",
    alt: "niagra falls bird view",
  },
  {
    title: "Zion National Park",
    link: "../images/zion_Park2.jpg",
    alt: "deset hill zion park",
  },
  {
    title: "Kauai islands",
    link: "../images/kauaii.jpg",
    alt: "kauai horizon view",
  },
  {
    title: "Grand Canyon",
    link: "../images/GrandCanyon.jpg",
    alt: "grand canyon desert view",
  },
];

Gallery.forEach((i) => {
  const galleryItem = document.querySelector("#gallery__item").content;
  const galleryLi = galleryItem.querySelector(".gallery__item").cloneNode(true);
  let itemImage = galleryLi.querySelector(".gallery__img");
  let itemTitle = galleryLi.querySelector(".desc__text");
  itemImage.src = i.link;
  itemImage.alt = i.alt;
  itemTitle.textContent = i.title;

  galleryUl.append(galleryLi);
});

let itemBin = document.querySelectorAll(".gallery__bin");
itemBin.forEach((bin) => {
  bin.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
});

const galleryImgAll = document.querySelectorAll(".gallery__img");
galleryImgAll.forEach((img) => {
  img.addEventListener("click", function (event) {
    const zoomContent = document.querySelector(".zoom");
    const zoomImg = document.querySelector(".zoom__img");
    const zoomAlt = document.querySelector(".zoom__alt");
    let itemTitle = document.querySelector(".desc__text");

    zoomContent.classList.add("zoom_open");
    zoomImg.src = event.target.src;
    zoomAlt.textContent = itemTitle.textContent;
  });
});
let heartLike = document.querySelectorAll(".desc__heart");
heartLike.forEach((heart) => {
  heart.addEventListener("click", function (event) {
    event.target.classList.toggle("button_liked");
  });
});
//function: form / gallery edit popup
const imgToggle = () => {
  const zoomPop = document.querySelector(".zoom");
  zoomPop.classList.toggle("zoom_open");
};
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
    itemImage.src = occupationInput.value;
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
    const galleryImgAll = document.querySelectorAll(".gallery__img");
    galleryImgAll.forEach((img) => {
      img.addEventListener("click", function (event) {
        const zoomContent = document.querySelector(".zoom");
        const zoomImg = document.querySelector(".zoom__img");
        const zoomAlt = document.querySelector(".zoom__alt");
        let itemTitle = document.querySelector(".desc__text");

        zoomContent.classList.add("zoom_open");
        zoomImg.src = event.target.src;
        zoomAlt.textContent = itemTitle.textContent;
      });
    });
  }
};

saveCreate.addEventListener("click", saveEdit);
editButton.addEventListener("click", openform);
plusBoxOpen.addEventListener("click", galleryEditOpen);
closeEditButton.addEventListener("click", closeform);
galleryImg.forEach((img) => {
  img.addEventListener("click", imgOpen);
});
zoomClose.addEventListener("click", imgToggle);
