$(document).ready(function() {
	'use strict';
  $('body').scrollspy(
    { target: '#bs-navbar'}
  );
  $('.navbar-collapse ul li a').click(function() {
      /* always close responsive nav after click */
      console.log('.navbar-collapse ul li a' + ' is clicked.');
      $('.navbar-toggle:visible').click();
  });
  new WOW().init();
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $('header h4').hide();
  $('header h1').addClass('animated fadeIn').one(animationEnd, function(){
  	console.log('add class for header h4');
  	$('header h4').show();
  	$('header h4').addClass('animated fadeIn');
  });
  $('#AboutMe h1').addClass('animated infinite pulse');
  $('#Projects .media:even').addClass('animated rollIn');
  $('#Projects .media:odd').addClass('animated zoomInDown');
  $('#Things .col-sm-2:nth-child(1)').addClass('animated infinite bounce');
  $('#Things .col-sm-2:nth-child(2)').addClass('animated infinite swing');
  $('#Things .col-sm-2:nth-child(3)').addClass('animated infinite jello');
  $('#Things .col-sm-2:nth-child(4)').addClass('animated infinite tada');
  $('#Things .col-sm-2:nth-child(5)').addClass('animated infinite flash');
  $('a.page-scroll').on('click',function(event){
  	var ele = $(this);
  	$('html, body').animate({
  		scrollTop: $(ele.attr('href')).offset().top
  	}, 1000);
  	event.preventDefault();
  });
});