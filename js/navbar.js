const navbar = document.querySelector('.navbar');



document.querySelector('.header__toggle').addEventListener('click', () => {
    if (navbar.classList.contains('navbar--active')) {
        navbar.classList.remove('navbar--active');
        navbar.querySelectorAll('.dropdown-menu').forEach((e) => e.style.height = 0)
    }
    else {
        navbar.classList.add('navbar--active');
    }
})


navbar.querySelectorAll('.link__opener').forEach((item) => {
    item.addEventListener('click', () => {
        if (!navbar.classList.contains('navbar--active')) {
            navbar.classList.add('navbar--active');
        }
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
            drp_menu.style.height = drp_menu.querySelectorAll('.dropdown-item').length * 37 + 6 + 'px';
        }
    })
})