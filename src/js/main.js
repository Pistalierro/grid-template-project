$(document).ready(function () {
  $('.header__navbar-btn').click(function () {
    $(this).toggleClass('active');
    $('.header__navbar-list').slideToggle(500);
  });
});

