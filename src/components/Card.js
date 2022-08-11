
export class Card {
  constructor(data, selector, handleCardClick) {
    (this._title = data.name),
      (this._link = data.link),
      (this._alt = `Photo of ${data.title}`);
    this._templateElement = selector;
    this._handleCardClick = handleCardClick;
  }
  _removeCard = () => this._cardElement.remove();
  _toggleHeart = (evt) => {
    evt.target.classList.toggle("button_liked");
  };
  _setEventListeners() {
    this._deleteCard.addEventListener("click", () => this._removeCard());
    this._likeCard.addEventListener("click", (evt) => this._toggleHeart(evt));
    this._galleryImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
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
    this._galleryText.textContent = this._title;
    this._galleryImg.alt = this._alt;

    this._setEventListeners();
    return this._cardElement;
  }
}
