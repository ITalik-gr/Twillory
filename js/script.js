

  $('.partners-slider').slick({
    dots: false,
    arrows: true,
    // autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: '<img src="../img/Arrow-next.svg" class= "next" alt="">',
    prevArrow: '<img src="../img/Arrow-prev.svg" class= "prev" alt="">',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      }
    ]
  });


  
// var trigger = document.getElementById('toggle');
// var box = document.getElementById('menu');

// toggle.addEventListener('click', function() {
//   box.classList.toggle('active');
// });


let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burger.addEventListener('click', function() { // открытие меню при нажатии
  menu.classList.toggle('menu__active');
});

burger.addEventListener('click', function() { // Изменение кнопки меню при нажатии
  burger.classList.toggle('burger__active');
});

let modal = document.querySelector('.modal'),
    closeModal = document.querySelector('.modal__close'), 
    button = document.querySelector('.header__btn'),
    buttonTwo = document.querySelector('.header__btn-1');

button.addEventListener('click', function() {
  modal.classList.toggle('modal__active'); //открытие модального окна
});
buttonTwo.addEventListener('click', function() {
  modal.classList.toggle('modal__active'); //открытие модального окна хз как по нормальному сделать
});

closeModal.addEventListener('click', function() {
  modal.classList.toggle('modal__active'); //закрытие модального окна при нажатии на крестик
});
let drupdownLink = document.querySelector('.nav__user-acount'),
    drupdownBody = document.querySelector('.nav__user-acount__block');
  drupdownLink.addEventListener('.click', function() {
  drupdownBody.classList.toggle('nav__user-acount__block-active');
});
console.log(drupdownBody);
  $('.header-slider').slick({
    dots: false,
    arrows: false,
    // autoplay: true,
  });

  $('.reviewes-slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.prev-reviewes'),
    nextArrow: $('.next-reviewes'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
