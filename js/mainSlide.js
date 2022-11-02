var swiper = new Swiper('.swiper', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   autoplay: {
      delay: 3000,
   },
   speed: 1000,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   autoplay: {
      delay: 3000,
   },
   speed: 800,
   effect: 'fade',
   on: {
      init: function () {
         console.log('swiper1 initialized')
      },
   },
})
