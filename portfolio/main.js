jQuery(document).ready(function($) {
	'use strict';
      var owl = $("#owl-testimonials");
        owl.owlCarousel({ 
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000,
          items : 1,
          itemsDesktop : [1000,1],
          itemsDesktopSmall : [900,1],
          itemsTablet: [600,1],
          itemsMobile : false
      });
        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'});

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });  
        });
        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
        })
  $('.projects-holder').mixitup({
    effects: ['fade','grayscale'],
    easing: 'snap',
    transitionSpeed: 400
});
});
