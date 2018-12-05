$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $header = $('header'),
      $panel = $('.panel');

  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $header.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      $header.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();
