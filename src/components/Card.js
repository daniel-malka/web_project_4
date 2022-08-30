export class Card {
  constructor(
    data,
    userId,
    selector,
    handleCardClick,
    handleLikeButton,
    handleDelete
  ) {
    this._name = data.name;
    this._userId = userId;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner._id;
    this._id = data._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;
    this._handleDelete = handleDelete;
    this._alt = `Photo of ${data.name}`;
    this._templateElement = selector;
  }

  isLiked() {
    return this._likes.some((like) => like._id == this._userId);
  }
  getId() {
    return this._id;
  }
  removeCard = () => this._cardElement.remove();

  _setEventListeners() {
    this._deleteCard.addEventListener("click", () =>
      this._handleDelete(this._id)
    );
    this._likeCard.addEventListener("click", () =>
      this._handleLikeButton(this._id)
    );
    this._galleryImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }
  addLike() {
    this._likeCard.classList.add("button_liked");
  }
  removeLike() {
    this._likeCard.classList.remove("button_liked");
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likesAmount = this._likes.length;
    this._cardElement.querySelector(".like__counter").textContent = likesAmount;
    if (this._owner !== this._userId) {
      this._deleteCard.style.display = "none";
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
    if (this.isLiked()) {
      this.addLike();
    } else {
      this.removeLike();
    }
    return this._cardElement;
  }
}
