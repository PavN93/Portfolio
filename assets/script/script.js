// Initialize material functions
$(function () {
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
    enterDelay: 600
  });
  
});

const copyText = ($this) => {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($($this).attr("data-copy")).select();
  document.execCommand("copy");
  $temp.remove();
};

// Materialize pushpin setup
const SetPushPin = () => {
  $('.pushpin-demo-nav').each(function () {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
};

// Resetting functions on window size change
$(window).resize(function () {
  SetPushPin();
  $('.parallax').parallax();
});

$("#scroll-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$("#copy-email").click(function (event) {
  event.preventDefault();
  copyText(this)
  M.toast({
    html: "Email copied!",
  })
});

$("#copy-mobile").click(function (event) {
  event.preventDefault();
  copyText(this)
  M.toast({
    html: "Mobile number copied!",
  })
});

// Tooltip disappear after click
$('.tooltipped').click(function () {
  $('.tooltipped').tooltip('close');
  $('.tooltipped').tooltip({
    position: "bottom",
    enterDelay: 600
  });
});

