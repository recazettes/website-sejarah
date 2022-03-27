(function($) {
    "use strict";
  
    // PREVENT CUT AND COPY
    $(document).ready(function() {
      $('body').bind('cut copy', function(e) {
          e.preventDefault();
        });
    });
    
    // SMOOTH SCROLL FOR NAV MENU AND .scrollto CLASSES
    var scrolltoOffset = $('#main-nav').outerHeight() - 1;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 300, 'easeInOutExpo');
  
          if (window.matchMedia("(max-width:991px)").matches) {
            $('.nav-menu').hide();
          }
          return false;
        }
      }
    });
  
    // SMOOTH SCROLL ON PAGE LOAD W/ HASH LINKS
    $(document).ready(function() {
      if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top - scrolltoOffset;
          $('html, body').animate({
            scrollTop: scrollto
          }, 300, 'easeInOutExpo');
        }
      }
    });
  
    // NAV ACTIVE STATE ON SCROLL
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 200;
  
      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".nav-menu ul:first li:first").addClass('active');
        }
      });
    });
  
    // NAVBAR SHOW - HIDE
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (!$('.subpage-nav').length) {
        if (scroll > 500) {
          $("#main-nav").slideDown(500);
        } else {
          $("#main-nav").slideUp(500);
        }
      }
    });
  
    // RESPONSIVE MENU
  
    $('.responsive').on('click', function(e) {
      $('.nav-menu').slideToggle();
    });
  
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  
  })(jQuery);