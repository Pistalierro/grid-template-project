$(document).ready(function () {
  $('.header-navbar__btn').click(function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').slideToggle(500);
  });
});

