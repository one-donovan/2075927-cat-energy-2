var e=document.querySelector(".nav__menu-button"),n=document.querySelector(".nav__list-inner"),t=document.querySelector(".map__frame");t.classList.remove("map__frame--nojs");n.classList.remove("nav__list-inner--nojs");e.addEventListener("click",()=>{n.classList.toggle("nav__list-inner--opened"),e.classList.toggle("nav__menu-button--opened")});
