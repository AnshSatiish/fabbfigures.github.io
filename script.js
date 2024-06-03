document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('header nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
