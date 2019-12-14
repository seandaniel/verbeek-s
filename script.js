// Google map
function initMap() {
  var clinton = {lat: 43.616684, lng: -81.540127};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: clinton});
  var marker = new google.maps.Marker({position: clinton, map: map});
};

$(function() {
  
  // Logo on scroll
  $(window).on('resize', function() {
    if ($(window).width() >= 1100) {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $(".primary-nav img").css({"height": "calc(189px / 2)", "width": "calc(400px / 2)"});
        } else {
          $('.primary-nav img').css({"height": "calc(189px / 1.5)", "width": "calc(400px / 1.5)"});
          }
      });
    }
  });
    
  // Mobile nav modal, Contact modal

  // Opens Mobile nav modal
  $('.fa-align-right').on('click',() =>{
    $('.mobile-nav-modal').fadeIn().css({"display": "block"});
  });
 
  // Opens Contact modal
  $('.modal-contact-button').on('click', function(){
    $('.contact-modal').fadeIn();
  });

  // Exits each modal
  $('.fa-times-circle').on('click',() => {
    $('.mobile-nav-modal').fadeOut();
    $('.contact-modal').fadeOut();
  });

  // Exits Contact modal on form submit
  $('form').on('submit',(event) => {
    event.preventDefault()
    $('.contact-modal').fadeOut();
  });

});