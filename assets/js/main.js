document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerClose = document.getElementById('burgerClose');

    if (burger && burgerMenu) {
        burger.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
        });
    }

    if (burgerClose && burgerMenu) {
        burgerClose.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
        });
    }
});

// start modal window
// Модальное окно
document.addEventListener('DOMContentLoaded', function() {
    const btnDetails = document.querySelector('.header__contacts');
    const modal = document.getElementById('modalInfo');
    const modalClose = document.getElementById('modalClose');

    if(btnDetails && modal) {
        btnDetails.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    }

    if(modalClose && modal) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Закрытие кликом по затемнению
    if(modal) {
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

