document.getElementById('header__menu-icon').addEventListener('click', () => {
    const options = document.getElementById('header__list');
    const menuIcon = document.getElementById('header__menu-icon');

    if (options.classList.contains('actived')) {
        options.classList.remove('actived');
        menuIcon.classList.remove('actived');
        return;
    }
    options.classList.add('actived');
    menuIcon.classList.add('actived');
});
