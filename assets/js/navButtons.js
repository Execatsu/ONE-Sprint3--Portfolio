import { scrollToIdOnClick } from "./scrollToOnClickEvent";

const menuItems = document.querySelectorAll('.header__list a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});