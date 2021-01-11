
$(function() {
  $('.parallax').parallax();
  $('.pushpin').pushpin();
  SetPushPin();
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false,
    direction: "left",
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

$(window).resize(function() {
  SetPushPin();
});

$("#scroll-top").click(function() {
  $("html, body").animate({scrollTop:0}, 1000);
})