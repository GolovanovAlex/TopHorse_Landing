// ---- ---- ---- ---- ---- //
const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  modalBtn = document.querySelector('.btn-modal'),
  modalBtnFooter = document.querySelector('.footer__btn'),
  yesBtn = document.querySelector('.modal__button--yes');

// ---- ---- Open Modal ---- ---- //
modalBtn.addEventListener('click', () => {
  modal.classList.add('active');
});
modalBtnFooter.addEventListener('click', () => {
  modal.classList.add('active');
});
// ---- ---- Close Modal ---- ---- //
yesBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
// ---- ---- Close Modal Overlay---- ---- //
overlay.addEventListener('click', () => {
  modal.classList.remove('active');
});
