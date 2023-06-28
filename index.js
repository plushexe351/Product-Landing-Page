const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header-content');
hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
})