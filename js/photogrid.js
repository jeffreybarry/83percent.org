$(function() {
    // on clicking a photo, gets rid of that photos active class.
    $('.photo-grid-photo').on('click', function() {
        $('.photo-grid-photo').removeClass('active');
        $(this).toggleClass('active');
    });

// on clicking a read more button
  $('.read-more').on('click', function() {
    // make deep copies of both bio and original, the parents of the thing.
      var $bio = $(this).parent().clone();
      var $original = $(this).parent();

      $bio.css({
        left: $original.position().left + 'px',
        top: $original.position().top + 'px'/*,
        height: $original.outerHeight() + 'px'*/
      });

      $('.photo-grid-photo').toggleClass('active');
      $bio.appendTo('body').addClass('expanded-bio');
      var bioHeight = $bio.outerHeight();
      // makes the hidden bio elements of the css vanish
      $bio.find('.hidden-bio').css('display', 'none');
      window.setTimeout(function() {
        $('.photo-grid-photo').removeClass('active');
        $bio.addClass('come-out');
        window.setTimeout(function(){
          //$bio.find('.hidden-bio').show();
          $bio.css('height', bioHeight + 'px');
        }, 5);
      }, 1);

      $('.close-me').on('click', function() {
          $(this).parent().removeClass('come-out');
          $(this).parent().removeClass('expanded-bio');
      });
  });
});
