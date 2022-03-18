const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    clickCross = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

clickCross.addEventListener('click', () => {
    menu.classList.remove('active');
})

const percents = document.querySelectorAll('.skills__ability-percent');
const bars = document.querySelectorAll('.skills__ability-bar-full');

percents.forEach((item, i) => {
    bars[i].style.width = percents[i].innerHTML;
})