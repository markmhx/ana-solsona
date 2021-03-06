$(function() {
  let showPortrait = function() {
    if ($('img.portrait').visible(true) && !$('img.portrait').hasClass('viewed')) {
      $('img.portrait').addClass('viewed');
      $('img.portrait').parent().imagesLoaded(function() {
        $('img.portrait').addClass('shown');
      });
    }
  }

  let showWorkListings = function() {
    if ($('section.work img').visible(true) && !$('section.work').hasClass('viewed')) {
      $('section.work').addClass('viewed');
      $('section.work').imagesLoaded(function() {
        let time = 50;

        $('div.listings li').each(function() {
          setTimeout(() => $(this).addClass('shown'), time);
          time += 50;
        });
      });
    }
  }

  let showNav = function() {
    if ($(window).scrollTop() > 500) {
      $('.on-scroll').addClass('shown');
    } else {
      $('.on-scroll').removeClass('shown');
    }
  }

  let showAll = function() {
    showPortrait();
    showWorkListings();
    showNav();
  }

  showAll();

  $(window).scroll(function() {
    showAll();
  })

  $('div.parallax').scroll(function() {
    showAll();
  })
});