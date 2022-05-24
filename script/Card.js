// import { imgViewElement, imgViewParagraph, imgViewPopup } from "./index.js";
const imgViewPopup = document.querySelector(".popup_type_zoom");
const imgViewElement = imgViewPopup.querySelector(".popup__img");
const imgViewParagraph = imgViewPopup.querySelector(".popup__alt");
import { openPopup } from "./utilities.js";
export class Card {
  constructor(data, templateElement) {
    this._title = data.title;
    this._link = data.link;
    this._alt = `Photo of ${data.title}`;
    this._templateElement = templateElement;
  }
  _handleImgViewPopup = (evt) => {
    imgViewElement.src = evt.target.src;
    imgViewElement.alt = evt.target.alt;
    imgViewParagraph.textContent = evt.target.title;
    openPopup(imgViewPopup);
  };
  _removeCard = () => this._cardElement.remove();
  _toggleHeart = (evt) => {
    evt.target.classList.toggle("button_liked");
  };
  _setEventListeners() {
    this._deleteCard.addEventListener("click", this._removeCard);
    this._likeCard.addEventListener("click", this._toggleHeart);
    this._galleryImg.addEventListener("click", (evt) =>
      this._handleImgViewPopup(evt)
    );
  }

  createCard() {
    this._cardElement = document
      .querySelector(this._templateElement)
      .content.querySelector(".gallery__item")
      .cloneNode(true);

    this._galleryImg = this._cardElement.querySelector(".gallery__img");
    this._galleryText = this._cardElement.querySelector(".desc__text");
    this._deleteCard = this._cardElement.querySelector(".gallery__bin");
    this._likeCard = this._cardElement.querySelector(".desc__heart");

    this._galleryImg.src = this._link;
    this._galleryImg.alt = this._alt;
    this._galleryText.textContent = this._title;

    this._setEventListeners();
    return this._cardElement;
    //img view
  }
}
