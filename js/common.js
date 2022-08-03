//Handles navigation bar transition
const navbar = document.querySelector('.mobile-menu');
const navbarLinks= document.querySelector('.menu-items');

navbar.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
    navbarLinks.classList.toggle('active');
});

const titleLogo = document.querySelector('.titlelogo');

titleLogo.addEventListener('click', () => {
    window.location.href = "http://www.vwcnails.com"
    window.location.replace('index.html');
});

const menuNav = document.querySelector('.navbar-container');
const menuLinks = document.querySelectorAll('.nav-links');

document.onreadystatechange = function() {
    let lScrollPosition = 0;
    window.addEventListener('scroll', (e) => {

        lScrollPosition = window.scrollY;

        if (lScrollPosition> 1) {
            menuNav.classList.add('scrolled-navbar');
            for (const links of menuLinks) {
                links.classList.add('scrolled-navbar');
            }
        } else {
            menuNav.classList.remove('scrolled-navbar');
            for (const links of menuLinks) {
                links.classList.remove('scrolled-navbar');
            }
        }
    });
};