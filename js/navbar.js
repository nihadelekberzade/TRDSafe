const navbar = document.querySelector('.navbar');
document.querySelector('.header__toggle').addEventListener('click', function () {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
    else {
        navbar.classList.add('active');
    }
})

document.querySelectorAll('.link').forEach((item) => {
    item.addEventListener('click', function () {
        item.style.height = 40;
    })
})
document.querySelector('.link').addEventListener('click', function (e) {

})