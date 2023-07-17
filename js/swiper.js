const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    autoplay: {
     delay: 5000,
     disableOnInteraction: false,
    },
    speed: 1000,
    effect: blur,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return '0' + number;
        },
    },
});