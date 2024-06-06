document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburger.classList.toggle('open');
    });
});

function toggleMobileMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show');
    document.getElementById('hamburger-icon').classList.toggle('open');
}
