import { Popup } from "./Popup";
export class PopupWithImage extends Popup {
  open(data) {
    const image = this._popupSelector.querySelector(".popup__img");
    const caption = this._popupSelector.querySelector(".popup__alt");

    caption.textContent = data.caption;
    image.src = data.link;
    super.open();
  }
  
}
