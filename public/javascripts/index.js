$(document).ready(function() {
  $("#target1").css("color", "red");
  $('body').scrollspy({ target: '#bs-navbar'});
  $('.navbar-collapse ul li a').click(function() {
      /* always close responsive nav after click */
      console.log('.navbar-collapse ul li a' + ' is clicked.');
      $('.navbar-toggle:visible').click();
  });
});