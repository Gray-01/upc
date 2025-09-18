  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

// submenu
 const submenuParents = document.querySelectorAll('.mobile-menu .has-submenu');
  submenuParents.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault(); // чтобы ссылка не срабатывала
      item.classList.toggle('open');
    });
  });
