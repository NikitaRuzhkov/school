$(function(){
  




  $('.header__link-about').on('click', function () {
    $('.header__about').toggleClass('header__about--active')
    $('.header__link-about').toggleClass('header__menu-link--active')
  });

  $('.header__link-school').on('click', function () {
    $('.header__school').toggleClass('header__school--active')
    $('.header__link-school').toggleClass('header__menu-link--active')
  });

  $('.header__link-another').on('click', function () {
    $('.header__services').toggleClass('header__services--active')
    $('.header__link-another').toggleClass('header__menu-link--active')
  });
  $('.header__link-blog').on('click', function () {
    $('.header__blog').toggleClass('header__blog--active')
    $('.header__link-blog').toggleClass('header__menu-link--active')
  });

 



  


});