// Initialize material functions
$(function() {
  $('.parallax').parallax();
  $('.pushpin').pushpin();
  SetPushPin();
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false,
    direction: "left",
  });
  $('.slider').slider();
  $('.tooltipped').tooltip({
    position: "bottom",
    enterDelay: 400
  });
});  

const SetPushPin = () => {
  $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
};

// Resetting functions on window size change
$(window).resize(function() {
  SetPushPin();
  $('.parallax').parallax();
});

$("#scroll-top").click(function() {
  $("html, body").animate({scrollTop:0}, 1000);
});

// Tooltip disappear after click
$('.tooltipped').click(function(){ 
  $('.tooltipped').tooltip('close');
  $('.tooltipped').tooltip(); 
});

