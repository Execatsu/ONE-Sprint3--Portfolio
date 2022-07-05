const menuItems = document.querySelectorAll('.header__list a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(e) {
    e.preventDefault();

    const headerHeight = 50;

    const element = e.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop - headerHeight - 5;

    window.scroll({
        top: to,
        behavior: "smooth"
    });
}