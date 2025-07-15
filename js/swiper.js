const swiper = new Swiper('.swcon', {
  slidesPerView: 1,
//   loop: true,
  spaceBetween: 30,
  centeredSlides: false,
  grabCursor: true,
  observer: true,
  observeParents: true,

//   pagination: {
//     el: '.swiper-pagination',
//   },


//   navigation: {
//     nextEl: '.slider__arrow-right',
//     prevEl: '.slider__arrow-left',
//   },

  pagination: {
    el: '.slider__pug',
    clickable: true,
  },


});