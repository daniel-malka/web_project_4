const popForm = document.querySelector(".form");
//open popup
const editButton = document.querySelector(".text__edit");
const plusBoxOpen = document.querySelector(".top__plus-box");
//close popup
const closeEditButton = document.querySelector(".popup__close");
const zoomClose = document.querySelector(".zoom__close");
const plusBoxClose = document.querySelector(".popup__close");
//close popup targets
const popup = document.querySelector(".popup");
let zoomPop = document.querySelector(".zoom");

//sumbit popup
const saveCreate = document.querySelector(".form__button");

//gallery referance
const galleryUl = document.querySelector(".gallery");
const galleryLi = document.querySelector(".gallery__item");
const galleryImg = document.querySelectorAll(".gallery__img");

const popupTitle = document.querySelector(".popup__title");
const textName = document.querySelector(".text__name");
const occupation = document.querySelector(".text__occu");
const nameInput = document.querySelector(".form__input_type_name");
const occupationInput = document.querySelector(".form__input_type_occu");

const Gallery = [
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

Gallery.forEach((i) => {
  const galleryItem = document.querySelector("#gallery__item").content;
  const galleryLi = galleryItem.querySelector(".gallery__item").cloneNode(true);
  galleryLi.querySelector(".gallery__img").src = i.link;
  galleryLi.querySelector(".gallery__img").alt = i.alt;
  galleryLi.querySelector(".desc__text").textContent = i.title;
  galleryUl.append(galleryLi);
  let galleryImg = document.querySelectorAll(".gallery__img");

  galleryImg.forEach((img) => {
    img.addEventListener("click", function (event) {
      let zoomPop = document.querySelector(".zoom");
      zoomPop.classList.add("zoom_open");
      zoomPop.querySelector(".zoom__img").src = event.target.src;
      zoomPop.querySelector(".zoom__alt").textContent =
        event.target.parentElement.querySelector(".desc__text").textContent;
    });
  });
});

let itemBin = document.querySelectorAll(".gallery__bin");
itemBin.forEach((bin) => {
  bin.addEventListener("click", function (event) {
    event.target.parentElement.remove();
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
const formOpen = () => {
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

// //function: popup close
const formClose = () => {
  popup.classList.remove("popup_open");
};

let saveEdit = (e) => {
  if (saveCreate.textContent === "Save") {
    e.preventDefault();
    textName.textContent = nameInput.value;
    occupation.textContent = occupationInput.value;
    formClose();
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
    let itemImgAll = galleryLi.querySelectorAll(".gallery__img");
    itemTitle.textContent = nameInput.value;
    itemImage.src = occupationInput.value;
    itemImage.alt = nameInput.value;

    galleryUl.prepend(galleryLi);
    formClose();
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
    itemImgAll.forEach((img) => {
      img.addEventListener("click", function (event) {
        const zoomPop = document.querySelector(".zoom");
        zoomPop.classList.add("zoom_open");
        zoomPop.querySelector(".zoom__img").src = event.target.src;

        zoomPop.querySelector(".zoom__alt").textContent =
          event.target.parentElement.querySelector(".desc__text").textContent;
      });
    });
  }
};
const galleryEditClose = (event) => {
  if (event.target === zoomPop) {
    zoomPop.classList.remove("zoom_open");
  } else if (event.target === popup) {
    formClose();
  }
};
// listeners
saveCreate.addEventListener("click", saveEdit);
editButton.addEventListener("click", formOpen);
plusBoxOpen.addEventListener("click", galleryEditOpen);
closeEditButton.addEventListener("click", formClose);

zoomClose.addEventListener("click", imgToggle);
popup.addEventListener("click", galleryEditClose);
zoomPop.addEventListener("click", galleryEditClose);
