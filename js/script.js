let menuButton = document.getElementById('nav-toggle');
let menuMobile = document.getElementById('nav-links');
menuButton.addEventListener('click', function() {
    menuMobile.classList.toggle('active-flex');
});