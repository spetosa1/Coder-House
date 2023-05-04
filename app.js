const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.navegacion');

hamburgerMenu.addEventListener('click', function() {
  console.log('toggleNav() is running');
  nav.classList.toggle('show');
});