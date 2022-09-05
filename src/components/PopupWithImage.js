import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this.caption = this._popup.querySelector(".popup__caption");
    this._image = this._popup.querySelector(".popup__img");
  }
  open(name, link) {
    this._caption.textContent = name;
    this._image.src = link;
    this._image.alt = `Photo of ${name}`;
    super.open();
  }
}
