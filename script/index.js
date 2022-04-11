const popForm = document.querySelector(".form");
//open popup
const editButton = document.querySelector(".text__edit");
const plusBoxOpen = document.querySelector(".top__plus-box");
//close popup
const closeEditButton = document.querySelector(".popup__close");
const zoomClose = document.querySelector(".zoom__close");
const plusBoxClose = document.querySelector(".popup__close");
//close popup targets
let popup = document.querySelector(".popup");
let zoomPop = document.querySelector(".zoom");

//sumbit popup
let saveCreate = document.querySelector(".form__button");

//gallery referance
let galleryUl = document.querySelector(".gallery");
let galleryLi = document.querySelector(".gallery__item");
let galleryImg = document.querySelectorAll(".gallery__img");

let popupTitle = document.querySelector(".popup__title");
let textName = document.querySelector(".text__name");
let occupation = document.querySelector(".text__occu");
let nameInput = document.querySelector(".form__input_type_name");
let occupationInput = document.querySelector(".form__input_type_occu");

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
  galleryLi.querySelector(".gallery__img").src = i.link;
  galleryLi.querySelector(".gallery__img").alt = i.alt;
  galleryLi.querySelector(".desc__text").textContent = i.title;
  galleryUl.append(galleryLi);
});

let itemBin = document.querySelectorAll(".gallery__bin");
itemBin.forEach((bin) => {
  bin.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
});

//img pop
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
//like
let heartLike = document.querySelectorAll(".desc__heart");
heartLike.forEach((heart) => {
  heart.addEventListener("click", function (event) {
    event.target.classList.toggle("button_liked");
  });
});
//function: form / gallery edit popup
const imgToggle = () => {
  zoomPop = document.querySelector(".zoom");
  zoomPop.classList.toggle("zoom_open");
};
const openform = () => {
  popupTitle.textContent = "Edit Profile";
  nameInput.placeholder = "";
  occupationInput.placeholder = "";
  saveCreate.textContent = "Save";
  nameInput.value = textName.textContent;
  occupationInput.value = occupation.textContent;
  occupation.type = "text";
  popup.classList.add("popup_open");
};

const galleryEditOpen = () => {
  popupTitle.textContent = "New place";
  nameInput.placeholder = "Title";
  occupationInput.placeholder = "Link";
  saveCreate.textContent = "Create";
  nameInput.value = "";
  occupationInput.value = "";
  occupationInput.type = "url";
  popup.classList.add("popup_open");
};
galleryImg.forEach((img) => {
  img.addEventListener("click", imgOpen);
});
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
    let itemImage = galleryLi.querySelector(".gallery__img");
    let itemTitle = galleryLi.querySelector(".desc__text");
    let itemBin = galleryLi.querySelectorAll(".gallery__bin");
    let heartLike = galleryLi.querySelectorAll(".desc__heart");
    itemTitle.textContent = nameInput.value;
    itemImage.src = occupationInput.value;
    galleryUl.prepend(galleryLi);
    closeform();
    //loops bin + heart buttons
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
    //loop added img
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
const closeME = (event) => {
  if (event.target === zoomPop) {
    zoomPop.classList.remove("zoom_open");
  } else if (event.target === popup) {
    closeform();
  }
};
// listeners
saveCreate.addEventListener("click", saveEdit);
editButton.addEventListener("click", openform);
plusBoxOpen.addEventListener("click", galleryEditOpen);
closeEditButton.addEventListener("click", closeform);

zoomClose.addEventListener("click", imgToggle);
popup.addEventListener("click", closeME);
zoomPop.addEventListener("click", closeME);
