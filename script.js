// Google map
function initMap() {
  var clinton = {lat: 43.616684, lng: -81.540127};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: clinton});
  var marker = new google.maps.Marker({position: clinton, map: map});
};

$(function() {

  //Logo on scroll
  let mq1200 = window.matchMedia("(min-width: 1200px)");

  $(window).on('resize', () => {
    mq1200 = window.matchMedia("(min-width: 1200px)");
  });

  $(window).on('scroll', () => {
    if (mq1200.matches) {
      if ($(window).scrollTop() > 100) {
        $(".primary-nav img").css({'height': 'calc(189px / 2)', 'width': 'calc(400px / 2)'});
      } else {
        $('.primary-nav img').css({'height': 'calc(189px / 1.5)', 'width': 'calc(400px / 1.5)'});
      }
    } else {
      $(".primary-nav img").css({'height': 'calc(189px / 2)', 'width': 'calc(400px / 2)'});
    }
  });

    
  // Mobile nav modal, Contact modal, Img modal

  // Opens Mobile nav modal
  $('.fa-align-right').on('click',(e) => {
    e.preventDefault();
    $('.mobile-nav-modal').fadeIn().css('display', 'block');
  });
 
  // Opens Contact modal
  $('.contact-modal-button').on('click', (e) => {
    e.preventDefault();
    $('.contact-modal').fadeIn();
  });

  // Opens Image modal
  $('.image-modal-button').on('click', function(e){
    e.preventDefault();
    const image = $(this).data('main');
    $('.image-modal-container img').attr('src', image);
    $('.image-modal').fadeIn().css({"display": "block"});
  });

  // Exits Mobile nav modal, Contact modal, Image modal
  $('.fa-times-circle').on('click', (e) => {
    e.preventDefault();
    $('.mobile-nav-modal').fadeOut();
    $('.contact-modal').fadeOut();
    $('.image-modal').fadeOut();
    $('body').css('overflow', 'visible');
  });

  // // Exits Contact modal on form submit
  // $('form').on('submit',(event) => {
  //   event.preventDefault()
  //   $('.contact-modal').fadeOut();
  // }); 

});