const openformButton = document.querySelector(".popOpen");
const closeformButton = document.querySelector(".popup__content::after");
const popPage = document.querySelector('.popop')

function toggleform() {
  popPage.classList.toggle(".pop_visi");
}

openformButton.addEventListener("click", toggleform);
