const nav_open = document.getElementById('nav-open');
const navbar_mobile = document.getElementById('navbar-mobile');
const nav_close = document.getElementById('nav-close');

nav_open.addEventListener('click', function () {
    navbar_mobile.classList.add('showMynav');
})

nav_close.addEventListener('click', function() {
    navbar_mobile.classList.remove('showMynav')
})