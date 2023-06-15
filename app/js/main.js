// ---- ---- ---- ---- ---- //
const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  modalBtn = document.querySelector('.btn-modal'),
  modalBtnFooter = document.querySelector('.footer__btn'),
  yesBtn = document.querySelector('.modal__button--yes');
const numberZIndexOff = document.querySelector('.history__number');
const menuBtn = document.querySelector('.menu__btn');
// ---- ---- Open Modal ---- ---- //
modalBtn.addEventListener('click', () => {
  modal.classList.add('mod-active');
  numberZIndexOff.classList.add('mod-active');
  menuBtn.classList.add('mod-active');
});
modalBtnFooter.addEventListener('click', () => {
  modal.classList.add('mod-active');
  numberZIndexOff.classList.add('mod-active');
  menuBtn.classList.add('mod-active');
});
// ---- ---- Close Modal ---- ---- //
yesBtn.addEventListener('click', () => {
  modal.classList.remove('mod-active');
  menuBtn.classList.remove('mod-active');
});
// ---- ---- Close Modal Overlay---- ---- //
overlay.addEventListener('click', () => {
  modal.classList.remove('mod-active');
  menuBtn.classList.remove('mod-active');
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
// ---- ---- menubtn---- ---- //

const menuMain = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menuMain.classList.toggle('active');
  menuBtn.classList.toggle('active');
});
