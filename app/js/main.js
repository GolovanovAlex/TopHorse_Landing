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

// ---- ---- Scroll---- ---- //
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
