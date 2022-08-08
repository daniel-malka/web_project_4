!function(){"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class t{constructor(t,s,r){e(this,"_removeCard",(()=>this._cardElement.remove())),e(this,"_toggleHeart",(e=>{e.target.classList.toggle("button_liked")})),this._title=t.title,this._link=t.link,this._alt="Photo of ".concat(t.title),this._templateElement=s,this._handleCardClick=r}_setEventListeners(){this._deleteCard.addEventListener("click",(()=>this._removeCard())),this._likeCard.addEventListener("click",(e=>this._toggleHeart(e))),this._galleryImg.addEventListener("click",(()=>this._handleCardClick(this._title,this._link)))}createCard(){return this._cardElement=document.querySelector(this._templateElement).content.querySelector(".gallery__item").cloneNode(!0),this._galleryImg=this._cardElement.querySelector(".gallery__img"),this._galleryText=this._cardElement.querySelector(".desc__text"),this._deleteCard=this._cardElement.querySelector(".gallery__bin"),this._likeCard=this._cardElement.querySelector(".desc__heart"),this._galleryImg.src=this._link,this._galleryText.textContent=this._title,this._galleryImg.alt=this._alt,this._setEventListeners(),this._cardElement}}function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class r{constructor(e,t){s(this,"resetValidation",(()=>{this._hideAllErrors(),this._formElement.reset(),this._disableButton()})),s(this,"enableValidation",(()=>{this._formElement.addEventListener("submit",(e=>e.preventDefault())),this._setEventListeners()})),s(this,"_setEventListeners",(()=>{this._allInputs.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButton(this._allInputs)}))}))})),s(this,"_hideAllErrors",(()=>{this._allInputs.forEach((e=>{this._hideInputError(e)}))})),s(this,"_disableButton",(()=>{const{buttonDisable:e}=this._settings;this._buttonEl.classList.add(e),this._buttonEl.disabled=!0})),s(this,"_showInputError",((e,t)=>{const{inputErrorClass:s,spanErrorClass:r}=this._settings;this._errorDynamicSpan=this._formElement.querySelector(".fieldset__error-type-".concat(e.id)),e.classList.add(s),this._errorDynamicSpan.textContent=t,this._errorDynamicSpan.classList.add(r)})),s(this,"_hideInputError",(e=>{const{inputErrorClass:t,spanErrorClass:s}=this._settings;this._errorDynamicSpan=this._formElement.querySelector(".fieldset__error-type-".concat(e.id)),e.classList.remove(t),this._errorDynamicSpan.classList.remove(s),this._errorDynamicSpan.textContent=""})),s(this,"_toggleButton",(e=>{const{buttonDisable:t}=this._settings;e.every((e=>e.validity.valid))?(this._buttonEl.classList.remove(t),this._buttonEl.disabled=!1):this._disableButton()})),s(this,"_checkInputValidity",(e=>{e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)})),this._settings=e,this._formElement=t,this._allInputs=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonEl=this._formElement.querySelector(this._settings.buttonSelector)}}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class n{constructor(e){i(this,"_handleOverlay",(e=>{e.target.classList.contains("popup")&&this.close()})),i(this,"_handleEscClose",(e=>{"Escape"===e.key&&this.close()})),this._popup=document.querySelector(e)}open(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}setEventListeners(){this._popup.addEventListener("mousedown",this._handleOverlay),this._popup.querySelector(".popup__close").addEventListener("mousedown",(()=>this.close()))}}class o extends n{constructor(e,t){super(e),this._handleForm=t,this._form=this._popup.querySelector(".form"),this._inputs=Array.from(this._form.querySelectorAll(".fieldset__input"))}_getInputValues(){return this._values={},this._inputs.forEach((e=>{this._key=e.name,this._value=e.value,this._values[this._key]=this._value})),this._values}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._valuesFromForm=this._getInputValues(),this._handleForm(this._valuesFromForm),super.close()}))}setInputValues(e){this._inputs.forEach((t=>{t.value=e[t.name]}))}close(){super.close(),this._form.reset()}}const l=(document.forms.formProfile.elements.name,document.forms.formProfile.elements.occupation,document.querySelector(".text__edit")),a=document.querySelector(".top__plus-box"),c={inputSelector:".fieldset__input",buttonSelector:".fieldset__button",buttonDisable:"fieldset__button_disabled",inputErrorClass:"fieldset__input_error",spanErrorClass:"fieldset__error-message-active"},h=new class{constructor(e){this._baseUrl=e.baseUrl,this._headers=e.headers}getUserInfo(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((e=>e.ok?e.json():Promise.reject(e.statusText)))}getCardsInfo(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((e=>e.ok?e.json():Promise.reject(e.statusText)))}editProfile(){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:{authorization:"","Content-Type":"application/json"},body:JSON.stringify({name:"another user name",about:"Physicist"})})}}({baseUrl:"https://around.nomoreparties.co/v1/cohort-3-en",headers:{authorization:"6efb715f-3f27-47aa-b11b-00d476bb80a2","Content-Type":"application/json"}});h.getUserInfo().then((e=>{console.log("res =>",e)})).catch(console.log),h.getCardsInfo().then((e=>console.log("res =>",e))).catch(console.log),h.editProfile();const _={formImg:"formImg",formProfile:"formProfile"},u=e=>{const s=(e=>new t(e,"#gallery__item",((e,t)=>{p.open(e,t)})).createCard())(e);y.addItem(s)};Array.from(document.querySelectorAll(".form")).forEach((e=>{const t=new r(c,e),s=e.getAttribute("name");_[s]=t,t.enableValidation()}));const d=new class{constructor(e){let{nameSelector:t,occupationSelector:s}=e;this._userName=document.querySelector(t),this._userOccupation=document.querySelector(s)}getUserInfo(){return{name:this._userName.textContent,occupation:this._userOccupation.textContent}}setUserInfo(e){this._userName.textContent=e.name,this._userOccupation.textContent=e.occupation}}({nameSelector:".text__name",occupationSelector:".text__occupation"}),p=new class extends n{open(e,t){this._image=this._popup.querySelector(".popup__img"),this._caption=this._popup.querySelector(".popup__caption"),this._caption.textContent=e,this._image.src=t,this._image.alt="Photo of ".concat(e),super.open()}}(".popup_type_zoom");p.setEventListeners();const m=new o(".popup_type_profile",(e=>{d.setUserInfo(e)}));m.setEventListeners();const f=new o(".popup_type_card",(e=>{u({title:e.title,link:e.link}),f.close()}));f.setEventListeners();const y=new class{constructor(e,t){this._renderer=e,this._container=document.querySelector(t)}renderItems(e){e.forEach((e=>{this.addItem(e,this._renderer(e))}))}addItem(){}}(u,".gallery");fetch("").then((e=>{y.renderItems(e),console.log("hix")})),a.addEventListener("click",(()=>(_[formImg.getAttribute("name")].resetValidation(),void f.open()))),l.addEventListener("click",(()=>{var e;_[formProfile.getAttribute("name")].resetValidation(),e=d.getUserInfo(),m.setInputValues(e),m.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNYixFQUFLYSxPQUlmc0ksRUFBWTNFLE9BQVosSUFFRjJFLEVBQVlyRSxvQkFFWixNQUFNcUQsRUFBVSxJR3BHVCxNQUNMcEksWUFBWXFKLEVBQVVDLEdBQ3BCbEosS0FBS21KLFVBQVlGLEVBQ2pCakosS0FBS29KLFdBQWE5SCxTQUFTQyxjQUFjMkgsRUFDMUMsQ0FDREcsWUFBWUMsR0FDVkEsRUFBTS9HLFNBQVNnSCxJQUNidkosS0FBS2lJLFFBQVFzQixFQUFNdkosS0FBS21KLFVBQVVJLEdBQWxDLEdBRUgsQ0FDRHRCLFVBQVksR0gwRmNKLEVGcEdSLFlFc0dwQnJCLE1BQU0sSUFBSUMsTUFBTUMsSUFDZHNCLEVBQVFxQixZQUFZM0MsR0FDcEJjLFFBQVFDLElBQUksTUFBWixJQU1GekIsRUFBZ0JoRixpQkFBaUIsU0FBUyxLQTFEeEMyRyxFQUFlQyxRQUFRUyxhQUFhLFNBQVNtQix1QkFDN0NSLEVBQVl4RSxVQTJEZG1CLEVBQXNCM0UsaUJBQWlCLFNBQVMsS0FyRGhCLElBSkNuQixFQUsvQjhILEVBQWU5QixZQUFZd0MsYUFBYSxTQUFTbUIsa0JBTGxCM0osRUFNWDBJLEVBQVNoQyxjQUw3QndDLEVBQVlyRCxlQUFlN0YsR0FPM0JrSixFQUFZdkUsTUFrRGEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3V0aWxpdGllcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhLCBzZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrKSB7XHJcbiAgICAodGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlKSxcclxuICAgICAgKHRoaXMuX2xpbmsgPSBkYXRhLmxpbmspLFxyXG4gICAgICAodGhpcy5fYWx0ID0gYFBob3RvIG9mICR7ZGF0YS50aXRsZX1gKTtcclxuICAgIHRoaXMuX3RlbXBsYXRlRWxlbWVudCA9IHNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuICBfcmVtb3ZlQ2FyZCA9ICgpID0+IHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gIF90b2dnbGVIZWFydCA9IChldnQpID0+IHtcclxuICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImJ1dHRvbl9saWtlZFwiKTtcclxuICB9O1xyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2RlbGV0ZUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX3JlbW92ZUNhcmQoKSk7XHJcbiAgICB0aGlzLl9saWtlQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4gdGhpcy5fdG9nZ2xlSGVhcnQoZXZ0KSk7XHJcbiAgICB0aGlzLl9nYWxsZXJ5SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fdGl0bGUsIHRoaXMuX2xpbmspXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVFbGVtZW50KVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2l0ZW1cIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICB0aGlzLl9nYWxsZXJ5SW1nID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5X19pbWdcIik7XHJcbiAgICB0aGlzLl9nYWxsZXJ5VGV4dCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY19fdGV4dFwiKTtcclxuICAgIHRoaXMuX2RlbGV0ZUNhcmQgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2JpblwiKTtcclxuICAgIHRoaXMuX2xpa2VDYXJkID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjX19oZWFydFwiKTtcclxuXHJcbiAgICB0aGlzLl9nYWxsZXJ5SW1nLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9nYWxsZXJ5VGV4dC50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgdGhpcy5fZ2FsbGVyeUltZy5hbHQgPSB0aGlzLl9hbHQ7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9hbGxJbnB1dHMgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NldHRpbmdzLmlucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9zZXR0aW5ncy5idXR0b25TZWxlY3RvclxyXG4gICAgKTtcclxuICB9XHJcbiAgcmVzZXRWYWxpZGF0aW9uID0gKCkgPT4ge1xyXG4gICAgdGhpcy5faGlkZUFsbEVycm9ycygpO1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQucmVzZXQoKTtcclxuICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICB9O1xyXG4gIGVuYWJsZVZhbGlkYXRpb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IGV2dC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfTtcclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9hbGxJbnB1dHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvbih0aGlzLl9hbGxJbnB1dHMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgX2hpZGVBbGxFcnJvcnMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9hbGxJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBfZGlzYWJsZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgYnV0dG9uRGlzYWJsZSB9ID0gdGhpcy5fc2V0dGluZ3M7XHJcbiAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3QuYWRkKGJ1dHRvbkRpc2FibGUpO1xyXG4gICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH07XHJcbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWwsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgeyBpbnB1dEVycm9yQ2xhc3MsIHNwYW5FcnJvckNsYXNzIH0gPSB0aGlzLl9zZXR0aW5ncztcclxuICAgIHRoaXMuX2Vycm9yRHluYW1pY1NwYW4gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgLmZpZWxkc2V0X19lcnJvci10eXBlLSR7aW5wdXRFbC5pZH1gXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKGlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICB0aGlzLl9lcnJvckR5bmFtaWNTcGFuLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgdGhpcy5fZXJyb3JEeW5hbWljU3Bhbi5jbGFzc0xpc3QuYWRkKHNwYW5FcnJvckNsYXNzKTtcclxuICB9O1xyXG4gIF9oaWRlSW5wdXRFcnJvciA9IChpbnB1dEVsKSA9PiB7XHJcbiAgICBjb25zdCB7IGlucHV0RXJyb3JDbGFzcywgc3BhbkVycm9yQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xyXG4gICAgdGhpcy5fZXJyb3JEeW5hbWljU3BhbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAuZmllbGRzZXRfX2Vycm9yLXR5cGUtJHtpbnB1dEVsLmlkfWBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5yZW1vdmUoaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIHRoaXMuX2Vycm9yRHluYW1pY1NwYW4uY2xhc3NMaXN0LnJlbW92ZShzcGFuRXJyb3JDbGFzcyk7XHJcbiAgICB0aGlzLl9lcnJvckR5bmFtaWNTcGFuLnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9O1xyXG4gIF90b2dnbGVCdXR0b24gPSAoaW5wdXRzKSA9PiB7XHJcbiAgICBjb25zdCB7IGJ1dHRvbkRpc2FibGUgfSA9IHRoaXMuX3NldHRpbmdzO1xyXG4gICAgY29uc3QgaXNJbnB1dHNWYWxpZCA9IGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbGlkaXR5LnZhbGlkKTtcclxuXHJcbiAgICBpZiAoaXNJbnB1dHNWYWxpZCkge1xyXG4gICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKGJ1dHRvbkRpc2FibGUpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChpbnB1dEVsKSA9PiB7XHJcbiAgICBpZiAoIWlucHV0RWwudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbCwgaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuICBfaGFuZGxlT3ZlcmxheSA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwXCIpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZXZ0KSA9PiB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLl9oYW5kbGVPdmVybGF5KTtcclxuICAgIHRoaXMuX3BvcHVwXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL1BvcHVwXCI7XHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlRm9ybSA9IGhhbmRsZUZvcm07XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRzZXRfX2lucHV0XCIpKTtcclxuICB9XHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5fdmFsdWVzID0ge307XHJcblxyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2tleSA9IGlucHV0Lm5hbWU7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl9rZXldID0gdGhpcy5fdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XHJcbiAgfVxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl92YWx1ZXNGcm9tRm9ybSA9IHRoaXMuX2dldElucHV0VmFsdWVzKCk7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm0odGhpcy5fdmFsdWVzRnJvbUZvcm0pO1xyXG4gICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldElucHV0VmFsdWVzKGRhdGEpIHtcclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGRhdGFbaW5wdXQubmFtZV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgZ2FsbGVyeVdyYXAgPSBcIi5nYWxsZXJ5XCI7XHJcbmNvbnN0IGFkZENhcmRQb3B1cCA9IFwiLnBvcHVwX3R5cGVfY2FyZFwiO1xyXG5jb25zdCBwcm9maWxlUG9wdXAgPSBcIi5wb3B1cF90eXBlX3Byb2ZpbGVcIjtcclxuY29uc3Qgb3BlbkltZ1ZpZXcgPSBcIi5wb3B1cF90eXBlX3pvb21cIjtcclxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZm9ybXMuZm9ybVByb2ZpbGUuZWxlbWVudHMubmFtZTtcclxuY29uc3Qgb2NjdXBhdGlvbklucHV0ID0gZG9jdW1lbnQuZm9ybXMuZm9ybVByb2ZpbGUuZWxlbWVudHMub2NjdXBhdGlvbjtcclxuY29uc3QgdGVtcGxhdGVTZWxlY3RvciA9IFwiI2dhbGxlcnlfX2l0ZW1cIjtcclxuY29uc3Qgc3BhbkFycmF5ID0ge1xyXG4gIG5hbWVTZWxlY3RvcjogXCIudGV4dF9fbmFtZVwiLFxyXG4gIG9jY3VwYXRpb25TZWxlY3RvcjogXCIudGV4dF9fb2NjdXBhdGlvblwiLFxyXG59O1xyXG5jb25zdCBvcGVuUHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHRfX2VkaXRcIik7XHJcbmNvbnN0IG9wZW5JbWdBZGRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wX19wbHVzLWJveFwiKTtcclxuLy9zZXR0aW5nc1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5maWVsZHNldF9faW5wdXRcIixcclxuICBidXR0b25TZWxlY3RvcjogXCIuZmllbGRzZXRfX2J1dHRvblwiLFxyXG4gIGJ1dHRvbkRpc2FibGU6IFwiZmllbGRzZXRfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJmaWVsZHNldF9faW5wdXRfZXJyb3JcIixcclxuICBzcGFuRXJyb3JDbGFzczogXCJmaWVsZHNldF9fZXJyb3ItbWVzc2FnZS1hY3RpdmVcIixcclxufTtcclxuY29uc3QgaW5pdGlhbEdhbGxlcnkgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiS2VuYWkgRmpvcmRzIGludGVyYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjMzOTY3OTIwMzc2LTMzYjJkOTRmMDkxZj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcwJnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlllbGxvd2xpbmtuZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA3NTUwMjk1MjYxLTg1MWZhNjBkOGVkMj9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcxJnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk5pYWdhcmEgRmFsbHNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTg0MDI0NTM4NjEtNGZiY2JmNmNlZDNiP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTc0JnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlppb24gTmF0aW9uYWwgUGFya1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwMjc0NjY2MzA4NC0xNGI1OWI2OTI0ZjI/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MCZxPTgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJLYXVhaSBpc2xhbmRzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM4NDAxNjA0NzY1LTQ3ZGFhYTVhNmMzND9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzgxJnE9ODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdyYW5kIENhbnlvblwiLFxyXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwOTMxNjc4NTI4OS0wMjVmNWI4NDZiMzU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3NiZxPTgwXCIsXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IHtcclxuICBnYWxsZXJ5V3JhcCxcclxuICBhZGRDYXJkUG9wdXAsXHJcbiAgcHJvZmlsZVBvcHVwLFxyXG4gIG9wZW5JbWdWaWV3LFxyXG4gIG5hbWVJbnB1dCxcclxuICBvY2N1cGF0aW9uSW5wdXQsXHJcbiAgdGVtcGxhdGVTZWxlY3RvcixcclxuICBzcGFuQXJyYXksXHJcbiAgb3BlblByb2ZpbGVFZGl0QnV0dG9uLFxyXG4gIG9wZW5JbWdBZGRQb3B1cCxcclxuICBzZXR0aW5ncyxcclxuICBpbml0aWFsR2FsbGVyeSxcclxufTtcclxuIiwiY2xhc3MgQXBpIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0aW9ucy5iYXNlVXJsO1xyXG4gICAgdGhpcy5faGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godGhpcy5fYmFzZVVybCArIFwiL3VzZXJzL21lXCIsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4gKHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChyZXMuc3RhdHVzVGV4dCkpKTtcclxuICB9XHJcbiAgZ2V0Q2FyZHNJbmZvKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyBcIi9jYXJkc1wiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IChyZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QocmVzLnN0YXR1c1RleHQpKSk7XHJcbiAgfVxyXG4gIGVkaXRQcm9maWxlKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyBcInVzZXJzL21lXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiBcIlwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZTogXCJhbm90aGVyIHVzZXIgbmFtZVwiLFxyXG4gICAgICAgIGFib3V0OiBcIlBoeXNpY2lzdFwiLFxyXG4gICAgICB9KSxcclxuICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAvLyAgIG5hbWU6IFwiTWFyaWUgU2vFgm9kb3dza2EgQ3VyaWVcIixcclxuICAgICAgLy8gICBhYm91dDogXCJQaHlzaWNpc3QgYW5kIENoZW1pc3RcIixcclxuICAgICAgLy8gfSksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFwaSA9IG5ldyBBcGkoe1xyXG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtMy1lblwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246IFwiNmVmYjcxNWYtM2YyNy00N2FhLWIxMWItMDBkNDc2YmI4MGEyXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZVwiO1xyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybVwiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblwiO1xyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2FsbGVyeVdyYXAsXHJcbiAgYWRkQ2FyZFBvcHVwLFxyXG4gIHByb2ZpbGVQb3B1cCxcclxuICBvcGVuSW1nVmlldyxcclxuICBuYW1lSW5wdXQsXHJcbiAgb2NjdXBhdGlvbklucHV0LFxyXG4gIHRlbXBsYXRlU2VsZWN0b3IsXHJcbiAgc3BhbkFycmF5LFxyXG4gIG9wZW5Qcm9maWxlRWRpdEJ1dHRvbixcclxuICBvcGVuSW1nQWRkUG9wdXAsXHJcbiAgc2V0dGluZ3MsXHJcbiAgaW5pdGlhbEdhbGxlcnksXHJcbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpXCI7XHJcblxyXG4vL2Z1bmN0aW9ucy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuYXBpXHJcbiAgLmdldFVzZXJJbmZvKClcclxuICAudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlcyA9PlwiLCByZXMpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuYXBpXHJcbiAgLmdldENhcmRzSW5mbygpXHJcbiAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2coXCJyZXMgPT5cIiwgcmVzKSlcclxuICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG5hcGkuZWRpdFByb2ZpbGUoKTtcclxuXHJcbmNvbnN0IHN1Ym1pdGVQcm9maWxlRm9ybUlucHV0cyA9IChkYXRhKSA9PiB7XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9ycyA9IHsgZm9ybUltZzogXCJmb3JtSW1nXCIsIGZvcm1Qcm9maWxlOiBcImZvcm1Qcm9maWxlXCIgfTtcclxuY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtXCIpKTtcclxuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWwpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBmb3JtRWwpO1xyXG4gICAgY29uc3QgZm9ybU5hbWUgPSBmb3JtRWwuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuICAgIGZvcm1WYWxpZGF0b3JzW2Zvcm1OYW1lXSA9IHZhbGlkYXRvcjtcclxuICAgIHZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IHJlc2V0QW5kT3BlbkltZ0FkZEZvcm0gPSAoKSA9PiB7XHJcbiAgZm9ybVZhbGlkYXRvcnNbZm9ybUltZy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXS5yZXNldFZhbGlkYXRpb24oKTtcclxuICBhZGRDYXJkRm9ybS5vcGVuKCk7XHJcbn07XHJcbmNvbnN0IGhhbmRsZVByb2ZpbGVGb3JtSW5wdXRzID0gKGRhdGEpID0+IHtcclxuICBwcm9maWxlRm9ybS5zZXRJbnB1dFZhbHVlcyhkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IHJlc2V0QW5kT3BlblByb2ZpbGVGb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1WYWxpZGF0b3JzW2Zvcm1Qcm9maWxlLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBoYW5kbGVQcm9maWxlRm9ybUlucHV0cyhwcm9maWxlRGF0YSk7XHJcbiAgcHJvZmlsZUZvcm0ub3BlbigpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGRhdGEsIHRlbXBsYXRlU2VsZWN0b3IsICh0aXRsZSwgbGluaykgPT4ge1xyXG4gICAgcG9wdXBXaXRoSW1hZ2Uub3Blbih0aXRsZSwgbGluayk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNhcmQuY3JlYXRlQ2FyZCgpO1xyXG59O1xyXG5jb25zdCByZW5kZXJDYXJkID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChkYXRhKTtcclxuICBzZWN0aW9uLmFkZEl0ZW0oY2FyZCk7XHJcbn07XHJcbmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbi8vY2xhc3Nlcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyhzcGFuQXJyYXkpO1xyXG5cclxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2Uob3BlbkltZ1ZpZXcpO1xyXG5wb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgcHJvZmlsZUZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybShwcm9maWxlUG9wdXAsIHN1Ym1pdGVQcm9maWxlRm9ybUlucHV0cyk7XHJcbnByb2ZpbGVGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBhZGRDYXJkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKGFkZENhcmRQb3B1cCwgKGRhdGEpID0+IHtcclxuICByZW5kZXJDYXJkKFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgbGluazogZGF0YS5saW5rLFxyXG4gICAgfSxcclxuICAgIGdhbGxlcnlXcmFwXHJcbiAgKTtcclxuICBhZGRDYXJkRm9ybS5jbG9zZSgpO1xyXG59KTtcclxuYWRkQ2FyZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihyZW5kZXJDYXJkLCBnYWxsZXJ5V3JhcCk7XHJcblxyXG5mZXRjaChcIlwiKS50aGVuKChyZXMpID0+IHtcclxuICBzZWN0aW9uLnJlbmRlckl0ZW1zKHJlcyk7XHJcbiAgY29uc29sZS5sb2coXCJoaXhcIilcclxufSk7XHJcblxyXG4vL2xpc3RlbmVycy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5vcGVuSW1nQWRkUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlc2V0QW5kT3BlbkltZ0FkZEZvcm0oKSk7XHJcblxyXG5vcGVuUHJvZmlsZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByZXNldEFuZE9wZW5Qcm9maWxlRm9ybSgpO1xyXG59KTtcclxuIiwiZXhwb3J0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgb2NjdXBhdGlvblNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX3VzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fdXNlck9jY3VwYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9jY3VwYXRpb25TZWxlY3Rvcik7XHJcbiAgfVxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIG9jY3VwYXRpb246IHRoaXMuX3VzZXJPY2N1cGF0aW9uLnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcbiAgc2V0VXNlckluZm8oZGF0YSkge1xyXG4gICAgKHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lKSxcclxuICAgICAgKHRoaXMuX3VzZXJPY2N1cGF0aW9uLnRleHRDb250ZW50ID0gZGF0YS5vY2N1cGF0aW9uKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgb3Blbih0aXRsZSwgbGluaykge1xyXG4gICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWdcIik7XHJcbiAgICB0aGlzLl9jYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2FwdGlvblwiKTtcclxuXHJcbiAgICAodGhpcy5fY2FwdGlvbi50ZXh0Q29udGVudCA9IHRpdGxlKSxcclxuICAgICAgKHRoaXMuX2ltYWdlLnNyYyA9IGxpbmspLFxyXG4gICAgICAodGhpcy5faW1hZ2UuYWx0ID0gYFBob3RvIG9mICR7dGl0bGV9YCk7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0sIHRoaXMuX3JlbmRlcmVyKGl0ZW0pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRJdGVtKCkge31cclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsInNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwidGhpcyIsIl9jYXJkRWxlbWVudCIsInJlbW92ZSIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl90aXRsZSIsInRpdGxlIiwiX2xpbmsiLCJsaW5rIiwiX2FsdCIsIl90ZW1wbGF0ZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2RlbGV0ZUNhcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlbW92ZUNhcmQiLCJfbGlrZUNhcmQiLCJfdG9nZ2xlSGVhcnQiLCJfZ2FsbGVyeUltZyIsImNyZWF0ZUNhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2dhbGxlcnlUZXh0Iiwic3JjIiwidGV4dENvbnRlbnQiLCJhbHQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9oaWRlQWxsRXJyb3JzIiwiX2Zvcm1FbGVtZW50IiwicmVzZXQiLCJfZGlzYWJsZUJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwiX2FsbElucHV0cyIsImZvckVhY2giLCJpbnB1dEVsIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b24iLCJpbnB1dCIsIl9oaWRlSW5wdXRFcnJvciIsImJ1dHRvbkRpc2FibGUiLCJfc2V0dGluZ3MiLCJfYnV0dG9uRWwiLCJhZGQiLCJkaXNhYmxlZCIsImVycm9yTWVzc2FnZSIsImlucHV0RXJyb3JDbGFzcyIsInNwYW5FcnJvckNsYXNzIiwiX2Vycm9yRHluYW1pY1NwYW4iLCJpZCIsImlucHV0cyIsImV2ZXJ5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJidXR0b25TZWxlY3RvciIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImNvbnRhaW5zIiwiY2xvc2UiLCJrZXkiLCJfcG9wdXAiLCJvcGVuIiwiX2hhbmRsZUVzY0Nsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEV2ZW50TGlzdGVuZXJzIiwiX2hhbmRsZU92ZXJsYXkiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9ybSIsInN1cGVyIiwiX2hhbmRsZUZvcm0iLCJfZm9ybSIsIl9pbnB1dHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfdmFsdWVzIiwiX2tleSIsIm5hbWUiLCJfdmFsdWUiLCJ2YWx1ZSIsIl92YWx1ZXNGcm9tRm9ybSIsInNldElucHV0VmFsdWVzIiwib3BlblByb2ZpbGVFZGl0QnV0dG9uIiwiZm9ybXMiLCJmb3JtUHJvZmlsZSIsImVsZW1lbnRzIiwib2NjdXBhdGlvbiIsIm9wZW5JbWdBZGRQb3B1cCIsImFwaSIsIm9wdGlvbnMiLCJfYmFzZVVybCIsImJhc2VVcmwiLCJfaGVhZGVycyIsImhlYWRlcnMiLCJnZXRVc2VySW5mbyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXNUZXh0IiwiZ2V0Q2FyZHNJbmZvIiwiZWRpdFByb2ZpbGUiLCJtZXRob2QiLCJhdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhYm91dCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImZvcm1WYWxpZGF0b3JzIiwiZm9ybUltZyIsInJlbmRlckNhcmQiLCJjYXJkIiwicG9wdXBXaXRoSW1hZ2UiLCJzZWN0aW9uIiwiYWRkSXRlbSIsImZvcm1FbCIsInZhbGlkYXRvciIsImZvcm1OYW1lIiwiZ2V0QXR0cmlidXRlIiwiZW5hYmxlVmFsaWRhdGlvbiIsInVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwib2NjdXBhdGlvblNlbGVjdG9yIiwiX3VzZXJOYW1lIiwiX3VzZXJPY2N1cGF0aW9uIiwic2V0VXNlckluZm8iLCJfaW1hZ2UiLCJfY2FwdGlvbiIsInByb2ZpbGVGb3JtIiwiYWRkQ2FyZEZvcm0iLCJyZW5kZXJlciIsImNvbnRhaW5lclNlbGVjdG9yIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJpdGVtIiwicmVzZXRWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==