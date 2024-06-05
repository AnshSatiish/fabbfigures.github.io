document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}