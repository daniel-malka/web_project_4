export class Card {
  constructor(data, userId, selector, handleCardClick, handleLikeButton) {
    this._name = data.name;
    this._userId = userId._id;
    this._link = data.link;
    this._likes = data.likes;
    this._likedByOwner = data.owner._id;
    this._id = data._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;
    this._alt = `Photo of ${data.name}`;
    this._templateElement = selector;
  }
  getOwner() {
    console.log(this._owner);
  }
  isLiked() {
    return this._likes.some((like) => like._id == this._likedByOwner);
  }
  getId() {
    return this._id;
  }
  _removeCard = () => this._cardElement.remove();

  _toggleHeart = () => {
    this._likeCard.classList.toggle("button_liked");
  };
  _handleLikes(id) {
    this._handleLikeButton(id);
  }
  _setEventListeners() {
    this._deleteCard.addEventListener("click", () => this._removeCard());
    this._likeCard.addEventListener("click", () => this._handleLikes(this._id));
    this._galleryImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likesAmount = this._likes.length;
    this._cardElement.querySelector(".like__counter").textContent = likesAmount;
    const cardIsLikedByCurrentUser = false;
    if (cardIsLikedByCurrentUser) {
      this._toggleHeart();
    }
  }

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

    this._galleryImg.alt = this._alt;
    this.setLikes(this._likes);

    this._setEventListeners();

    return this._cardElement;
  }
}
