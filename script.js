const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.nav-menu-dropdown');
const dropdownClose= document.querySelector('.drop-close')

navbarToggle.addEventListener('click', function() {
  navbarMenu.style.display='block'
});

dropdownClose.addEventListener('click', function() {
  navbarMenu.style.display='none'
});
