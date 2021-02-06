$(function () {
   $('.products__slider').slick({
      prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button > ',
      nextArrow: '<button  class= "slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
      infinity: false,
      responsive: [
         {
            breakpoint: 580,
            settings: {
               arrows: false,
               autoplay: true,
               autoplaySpeed: 1300
            }
         }
      ]
   });

   $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
         beforeOpen: function () {
            if ($(window).width() < 700) {
               this.st.focus = false;
            } else {
               this.st.focus = '#name';
            }
         }
      }
   });

   $(function () {
      new WOW().init();
   });

   $('.menu__btn').click(function (event) {
      $('.menu__btn, .menu__list').toggleClass('active');
   });

   $('.menu__list-link').click(function (event) {
      $('.menu__btn, .menu__list').removeClass('active');
   });
});