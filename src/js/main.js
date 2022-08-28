import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4());

let $navbar_menuIcon = document.querySelector('.navbar__menuIcon');
let $navbar_menu = document.querySelector('.navbar__menu');
let $navbar_menuClose = document.querySelector('.navbar__menu__close');

$navbar_menuIcon.addEventListener('click', function () {
  $navbar_menu.classList.toggle('navbar__menu--open');
})

$navbar_menuClose.addEventListener('click', function () {
  $navbar_menu.classList.toggle('navbar__menu--open');
})