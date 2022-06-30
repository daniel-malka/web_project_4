import { Popup } from "./Popup";
export class PopupWithImage extends Popup {
  open(title, link) {
    const image = this._popup.querySelector(".popup__img");
    const caption = this._popup.querySelector(".popup__caption");

    (caption.textContent = title), (image.src = link);
    super.open();
  }
}
