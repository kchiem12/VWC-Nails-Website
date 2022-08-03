
/* Ensures image is of right size */
const footer = document.querySelector(".footer-content");
const introduction = document.getElementById("intro");
let windowHeight = window.innerHeight;
let footerHeight = footer.offsetHeight;
let introHeight = windowHeight - footerHeight;
introduction.style.height = `${introHeight}px`;


