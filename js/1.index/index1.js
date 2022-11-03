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

const contents = document.querySelectorAll('.reservation-box1');
const button = document.querySelectorAll('.reservation-box1');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('mouseover', function () {
    contents[i].classList.add('opacity40');
  });
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('mouseout', function () {
    contents[i].classList.remove('opacity40');
  });
}

const contents2 = document.querySelectorAll('.reservation-box2');
const button2 = document.querySelectorAll('.reservation-box2');

for (let i = 0; i < button.length; i++) {
  button2[i].addEventListener('mouseover', function () {
    contents2[i].classList.add('opacity40');
  });
}

for (let i = 0; i < button.length; i++) {
  button2[i].addEventListener('mouseout', function () {
    contents2[i].classList.remove('opacity40');
  });
}

const contents3 = document.querySelectorAll('.reservation-box3');
const button3 = document.querySelectorAll('.reservation-box3');

for (let i = 0; i < button.length; i++) {
  button3[i].addEventListener('mouseover', function () {
    contents3[i].classList.add('opacity40');
  });
}

for (let i = 0; i < button.length; i++) {
  button3[i].addEventListener('mouseout', function () {
    contents3[i].classList.remove('opacity40');
  });
}

const contents4 = document.querySelectorAll('.reservation-box4');
const button4 = document.querySelectorAll('.reservation-box4');

for (let i = 0; i < button.length; i++) {
  button4[i].addEventListener('mouseover', function () {
    contents4[i].classList.add('opacity40');
  });
}

for (let i = 0; i < button.length; i++) {
  button4[i].addEventListener('mouseout', function () {
    contents4[i].classList.remove('opacity40');
  });
}
