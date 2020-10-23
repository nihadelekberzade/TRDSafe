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


navbar.querySelectorAll('.link__opener').forEach((item) => {
    item.addEventListener('click', () => {
        let drp_menu = item.parentElement.querySelector('.dropdown-menu');
        /* if logout btn is clicked */
        if (drp_menu === null) {
            if (navbar.querySelector('.link--active')) {
                navbar.querySelector('.link--active').querySelector('.dropdown-menu').style.height = 0;
                navbar.querySelector('.link--active').classList.remove('link--active');
            }
            return
        }
        /* if active link is clicked */
        if (item.parentElement.classList.contains('link--active')) {
            drp_menu.style.height = 0;
            item.parentElement.classList.remove('link--active');
            return;
        }
        /* if there is another active link so close it */
        if (navbar.querySelector('.link--active')) {
            navbar.querySelector('.link--active').querySelector('.dropdown-menu').style.height = 0;
            navbar.querySelector('.link--active').classList.remove('link--active');
        }
        if (item.parentElement.classList.contains('link--active')) {
            item.parentElement.classList.remove('link--active');
        }
        else {
            item.parentElement.classList.add('link--active');
            drp_menu.style.height = drp_menu.querySelectorAll('.dropdown-item').length * 34 + 'px';
        }
    })
})