const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header-content');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
})