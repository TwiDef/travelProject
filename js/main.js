// Carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});


// Nav icon
/* document.querySelector('.menu-icon-wrapper').onclick = function() {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}; */


let iconWrapper = document.querySelector('.menu-icon-wrapper');
let menuIcon = document.querySelector('.menu-icon');

iconWrapper.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
});