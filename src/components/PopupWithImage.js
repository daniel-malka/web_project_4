import { Popup } from "./Popup";
export class PopupWithImage extends Popup {
  open(title, link) {
    this._image = this._popup.querySelector(".popup__img");
    this._caption = this._popup.querySelector(".popup__caption");

    (this._caption.textContent = title),
      (this._image.src = link),
      (this._image.alt = `Photo of ${title}`);
    super.open();
  }
}
