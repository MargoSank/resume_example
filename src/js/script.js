const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    clickCross = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

clickCross.addEventListener('click', () => {
    menu.classList.remove('active');
})
