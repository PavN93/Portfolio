// Initialize material functions
$(function () {
  $('.parallax').parallax();
  $('.pushpin').pushpin();
  SetPushPin();
  $('.sidenav').sidenav();
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false,
    direction: 'left',
  });
  // $('.slider').slider();
  $('.tooltipped').tooltip({
    position: 'bottom',
    enterDelay: 600
  });
  $(window).scroll(function() {
    animateElements();
  })
});

function animateElements() {
  $('.animated').each(function(i) {
    const objectBottom = $(this).position().top + 200;
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (objectBottom < windowBottom) {
      $(this).removeClass('animated', 500);
    }
  })
}

function copyText($this) {
  const $temp = $('<input>');
  $('body').append($temp);
  $temp.val($($this).attr('data-copy')).select();
  document.execCommand('copy');
  $temp.remove();
};

// Materialize pushpin setup
function SetPushPin() {
  $('.pushpin-demo-nav').each(function () {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));
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

$('#scroll-top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 1000);
});

$('#copy-email').click(function (event) {
  event.preventDefault();
  copyText(this)
  M.toast({
    html: 'Email copied!',
  })
});

$('#copy-mobile').click(function (event) {
  event.preventDefault();
  copyText(this)
  M.toast({
    html: 'Mobile number copied!',
  })
});

// Tooltip disappear after click
$('.tooltipped').click(function () {
  $('.tooltipped').tooltip('close');
  $('.tooltipped').tooltip({
    position: 'bottom',
    enterDelay: 600
  });
});

