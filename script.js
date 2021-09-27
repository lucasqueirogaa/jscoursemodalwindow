// ------------------------------------
//          code variables
// ------------------------------------
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);
// ------------------------------------
//               open
// ------------------------------------
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// ------------------------------------
//              close
// ------------------------------------
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// ------------------------------------
//  buttons to open and close the code
// ------------------------------------
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
