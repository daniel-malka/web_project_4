export class Card {
  constructor(data, selector, handleCardClick, handleLikeButton, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._id = data._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;

    this._alt = `Photo of ${data.name}`;
    this._templateElement = selector;
  }

  getId() {
    return this._id;
  }
  likeCard(newLike) {
    this._likes = newLike;
    this.likeAmount.textContent = this._likes.length;
  }
  _removeCard = () => this._cardElement.remove();

  _toggleHeart = () => {
    this._likeCard.classList.toggle("button_liked");
  };
  _handleLikes() {
    this._handleLikeButton();
  }
  _setEventListeners() {
    this._deleteCard.addEventListener("click", () => this._removeCard());
    this._likeCard.addEventListener("click", () => this._handleLikes());
    this._galleryImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  setLikes(newLikes) {}
  createCard() {
    this._cardElement = document
      .querySelector(this._templateElement)
      .content.querySelector(".gallery__item")
      .cloneNode(true);

    this._galleryImg = this._cardElement.querySelector(".gallery__img");
    this._galleryText = this._cardElement.querySelector(".desc__text");
    this._deleteCard = this._cardElement.querySelector(".gallery__bin");
    this._likeCard = this._cardElement.querySelector(".like__button");
    this._galleryText.textContent = this._name;
    this._galleryImg.src = this._link;
    const likesNumber = this._cardElement.querySelector(".like__counter");

    likesNumber.textContent = this._likes.length;
    this._galleryImg.alt = this._alt;

    this.setLikes(this._likes.length);
    this._setEventListeners();

    return this._cardElement;
  }
}
