(() => {
  const refs = {
    openMenulBtn: document.querySelector('[menu-open-btn]'),
    closeMenuBtn: document.querySelector('[mob-menu-close-btn]'),
    menu: document.querySelector('[mob-menu-backdrop]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
