export function scrollToIdOnClick(e) {
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