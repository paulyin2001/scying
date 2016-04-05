$(document).ready(function() {
	'use strict';
  $("#newQuote").click(function(){
    $('#quote').removeClass('animated fadeIn');
    //$.getJSON("http://localhost:3000/api/quotes",function(json){
    $.getJSON("https://scying.herokuapp.com/api/quotes",function(json){
      var textRen="";
      var i = Math.floor(Math.random() * json.length);
      var val = json[i];
      textRen=val["quote"]+" - "+val["author"];
      $("#quote").text(textRen);
      $('#quote').addClass('animated fadeIn');
    });
  });
  //https://dev.twitter.com/web/tweet-button/web-intent
  $('#tweet').click(function(){
    var quote = $('#quote').text();
    var tweetWebIntent = "https://twitter.com/intent/tweet?text=";
    $('#tweet').attr({
      "href": tweetWebIntent + quote
    });
  });
});