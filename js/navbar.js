const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');

document.querySelector('.header__toggle').addEventListener('click', function () {
    if (navbar.classList.contains('navbar--active')) {
        navbar.classList.remove('navbar--active');
        main.classList.add('main--fullsize');
    }
    else {
        navbar.classList.add('navbar--active');
        main.classList.remove('main--fullsize');
    }
})


let hasActiveLink = true;
navbar.querySelectorAll('.link__opener').forEach((item) => {
    item.addEventListener('click', () => {
        let drp_menu = item.parentElement.querySelector('.dropdown-menu');
        if (drp_menu === null) return;
        if (drp_menu.classList.contains('dropdown-menu--active')) {
            drp_menu.classList.remove('dropdown-menu--active');
            return;
        }


        if (navbar.querySelector('.dropdown-menu--active')) {
            navbar.querySelector('.dropdown-menu--active').classList.remove('dropdown-menu--active');
            console.log('1');
        }
        if (drp_menu.classList.contains('dropdown-menu--active')) {
            console.log('2');
            drp_menu.classList.remove('dropdown-menu--active');
            hasActiveLink = !hasActiveLink;
        }
        else {
            console.log('3');
            drp_menu.classList.add('dropdown-menu--active');
        }
    })
})