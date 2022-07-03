import { scrollToIdOnClick } from "../scrollToOnClickEvent"

document.querySelectorAll(".carousel__header__option-seeAll").forEach(button => {
    button.addEventListener('click', scrollToIdOnClick(e));
});