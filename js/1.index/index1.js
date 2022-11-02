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
      console.log('swiper1 initialized');
    },
  },
});

// $(function () {
//   $(function () {
//     $('.icon').click(function () {
//       $('.icon').parent().next().css({ color: '#324521' });
//     });

//     $('.icon').on({
//       'mouseover focus': function () {
//         $('.icon').parent().next().css({ color: 'red' });
//       },
//       'mouseout blur': function () {
//         $('.icon').parent().next().css({ color: 'black' });
//       },
//     });
//     $('.icon').off('click');
//     $('.icon').off('mouseover');
//     // .off : 이벤트를 제거한다. 보통은 특정 경우에 제거되도록 설정한다.
//   });
// });
