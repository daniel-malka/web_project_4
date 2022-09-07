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

  removeCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

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

  _addLike() {
    this._likeCard.classList.add("button_liked");
  }

  _removeLike() {
    this._likeCard.classList.remove("button_liked");
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    console.log(this._owner, "owner", this._userId, "userId");
    const likesAmount = this._likes.length;
    this._counterLikes.textContent = likesAmount;
    this._renderLikes();
  }
  _hideDeleteButton() {
    if (this._owner !== this._userId) {
      this._deleteCard.style.display = "none";
    }
  }
  _renderLikes() {
    if (this.isLiked()) {
      this._addLike();
    } else {
      this._removeLike();
    }
  }
  _generateCard() {
    return (this._cardElement = document
      .querySelector(this._templateElement)
      .content.querySelector(".gallery__item")
      .cloneNode(true));
  }

  createCard() {
    this._cardElement = this._generateCard();
    this._galleryImg = this._cardElement.querySelector(".gallery__img");
    this._galleryText = this._cardElement.querySelector(".desc__text");
    this._deleteCard = this._cardElement.querySelector(".gallery__bin");
    this._likeCard = this._cardElement.querySelector(".like__button");
    this._counterLikes = this._cardElement.querySelector(".like__counter");
    this._galleryText.textContent = this._name;
    this._galleryImg.src = this._link;

    this._galleryImg.alt = this._alt;
    this._renderLikes();
    this._hideDeleteButton();
    this._setEventListeners();

    return this._cardElement;
  }
}
