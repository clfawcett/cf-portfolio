
  let heroHeight = $('#hnav').outerHeight();

  if ($(window).scrollTop() > heroHeight) {
    $('#hlogo').css('opacity', '0');
    $('#heromenu').css('opacity', '0');

  } else {
    $('#hlogo').css('opacity', '1');
    $('#heromenu').css('opacity', '1');
  }

  let distance = $('nav').offset().top;

  if( $(window).scrollTop() >= distance) {
    $('#navlogo').css('opacity', '1');
    $('#navmenu').css('opacity', '1');
  } else {
    $('#navlogo').css('opacity', '0');
    $('#navmenu').css('opacity', '0');
  }
});
