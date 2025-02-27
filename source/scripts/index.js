const menuButton = document.querySelector('.nav__menu-button');
const menuList = document.querySelector('.nav__list-inner');
const map = document.querySelector('.map__frame');

map.classList.remove('map__frame--nojs');
menuList.classList.remove('nav__list-inner--nojs');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('nav__list-inner--opened');
  menuButton.classList.toggle('nav__menu-button--opened');
});
