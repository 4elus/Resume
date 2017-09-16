"use strict";

$(document).ready( function() {

	$.fn.initAnimation = function() {
		$(this).each( function() {
			var animation_class = $(this).data('animate');
			var delay = $(this).data('delay');
			delay = delay? delay : 0;
			var obj = $(this);
			setTimeout( function() {
				obj.removeClass('not-animated').addClass(animation_class).addClass('animated');
				obj.removeClass('hide-iframe');
				obj.css( 'visibility', 'visible' );
			}, delay );
		} );
	};
	$.fn.resetAnimation = function() {
		$(this).each( function() {
			var animation_class = $(this).data('animate');
			$(this).removeClass(animation_class).removeClass('animated').addClass('not-animated');
		} );
	};
	$.fn.progressbar_animate = function() {
		$(this).each( function() {
			var progressbar = $(this);
			var value = progressbar.data('value');
			var meter = progressbar.find('.progressbar-meter');
			meter.removeClass('has-animation').css( 'width', '0' );
			setTimeout( function() {
				meter.addClass('has-animation').css( 'width', value + '%' );
			}, 300 );
			progressbar.find('.progressbar-value span').countTo( {
				from: 0,
		        to: value,
		        speed: 1500,
		        refreshInterval: 1500 / value
			} );
		} );
	}

	function init() {

        $(window).trigger('resize');

		/* CSS Animation with waypoint */
		$('[data-animate]').each( function() {
			var element = $(this);
			element.waypoint( function() {
				element.initAnimation();
			}, {
				triggerOnce: true,
				offset: 'bottom-in-view'
			} );
		} );
		
		/* init code here */
		/* -------------- */
		
		/* Menu toggle */
		$('#menu-toggle').on( "click", function(e) {
			e.preventDefault();
			e.stopPropagation();
			if( window.matchMedia( "(max-width: 992px)" ).matches ) {
				if( $(this).hasClass('opened') ) {
					$(this).removeClass('opened');
					$('#mobile-menu').removeClass('opened');
				} else {
					$(this).addClass('opened');
					$('#mobile-menu').addClass('opened');
				}
			}
		} );
		$('html,body').on( "click", function(e) {
			if( $('#menu-toggle').hasClass('opened') ) {
				e.preventDefault();
				e.stopPropagation();
				$('#menu-toggle').removeClass('opened');
				$('#mobile-menu').removeClass('opened');
			}
		} );
		$('#mobile-menu').on( "click", function(e) {
			e.preventDefault();
			e.stopPropagation();
		} );

		/* Mobile Menu Item Click */
		$('#mobile-menu .menu-item').on( "click", function() {
            if ($(this).siblings('.submenu').length == 0) {
                window.location = $(this).attr('href');
                return;
            }
			var parent_li = $(this).parent();
			if( parent_li.hasClass('opened') ) {
				parent_li.removeClass('opened');
				parent_li.children('.submenu').slideUp( 300 );
			} else {
				parent_li.addClass('opened');
				parent_li.children('.submenu').slideDown( 300 );
			}
			return false;
		} );
		$('#mobile-menu .sub-menu-item a').on( "click", function() {
			window.location = $(this).attr('href');
		} );

        $('.panel').on('hidden.bs.collapse', function (e) {
            //alert('Event fired HIDDEN on #' + e.currentTarget.id);
            $(this).removeClass('open');
        })
        $('.panel').on('shown.bs.collapse', function (e) {
            $(this).addClass('open');
        })
	}

	/* Initialization */
	init();

	/* 
	 * Initialization after images loaded
	 */
	imagesLoaded( $('body'), function() {

        /* Main slider init */
        if( $('#main-slider').length > 0 ) {
            var main_slider = new Swiper( '#main-slider .swiper-container', {
                direction: 'horizontal',
                loop: true,
                speed: 600,
                autoplay: 6000,
                allowSwipeToPrev: true,
                allowSwipeToNext: true,
                preventClicksPropagation: false,
                nextButton: '.main-slider-control.next',
                prevButton: '.main-slider-control.prev',
                pagination: '.page-controls',
                paginationClickable: true,
                paginationBulletRender: function (index, className) {
                    return '<a class="page-control ' + className + '" href="#"></a>';
                },
                onInit: function( swiper ) {
                    var current_slide = $(swiper.slides[swiper.activeIndex]);
                    current_slide.find('[data-animate]').initAnimation();
                },
                onSlideChangeStart: function( swiper ) {
                    var current_slide = $(swiper.slides[swiper.activeIndex]);
                    current_slide.find('[data-animate]').resetAnimation();
                },
                onSlideChangeEnd: function( swiper ) {
                    var current_slide = $(swiper.slides[swiper.activeIndex]);
                    swiper.slides.find('[data-animate]').css( 'visibility', 'hidden' );
                    current_slide.find('[data-animate]').initAnimation();
                }
            } );
        }

        if( $('.testimonial-slider').length > 0 ) {
            var testimonial_swiper = new Swiper( '.testimonial-slider', {
                direction: 'horizontal',
                slideToClickedSlide: true,
                speed: 600,
                autoplay: 5000,
                allowSwipeToPrev: true,
                allowSwipeToNext: true,
                loop: true,
                spaceBetween: 40,
                pagination: '.testimonial-slider-page-controls',
                paginationClickable: true,
                paginationBulletRender: function( index, className ) {
                    return '<a class="page-control ' + className + '" href="#"></a>';
                }
            } );
        }

        if( $('.testimonial-slider-2').length > 0 ) {
            var testimonial_swiper_2 = new Swiper( '.testimonial-slider-2', {
                direction: 'vertical',
                slideToClickedSlide: true,
                speed: 600,
                allowSwipeToPrev: true,
                allowSwipeToNext: true,
                autoplay: 5000,
                loop: true,
                spaceBetween: 40,
                pagination: '.testimonial-slider-page-controls',
                paginationClickable: true,
                paginationBulletRender: function( index, className ) {
                    return '<a class="page-control ' + className + '" href="#"></a>';
                }
            } );
        }

        if( $('.gallery-slider').length > 0 ) {
            var gallery_slider = new Swiper( '.gallery-slider', {
                direction: 'horizontal',
                slideToClickedSlide: true,
                speed: 600,
                allowSwipeToPrev: true,
                allowSwipeToNext: true,
                nextButton: '.gallery-slider .fa-chevron-right',
                prevButton: '.gallery-slider .fa-chevron-left',
                autoplay: 5000,
                loop: true,
                spaceBetween: 40,
                paginationClickable: true,
                paginationBulletRender: function( index, className ) {
                    return '<a class="page-control ' + className + '" href="#"></a>';
                }
            } );
        }

        /* Preloader finish */
		$('body').removeClass('loading');
		$('#preloader').hide();
		$('#preloader-wrapper').css( 'opacity', '0' );
		setTimeout( function() {
			$('#preloader-wrapper').hide();
		}, 800 );

        $( ".datepicker" ).datepicker({
            showOn: "both",
            buttonText: "<i class='fa fa-calendar'></i>",
            beforeShow: function (input, inst) {
                $('#ui-datepicker-div').addClass($(input).data('theme'));
            }
        });


        /* Booking inline datepickers */
        var eventDates = {};
        eventDates[ new Date( '05/28/2015' )] = 'selected';
        eventDates[ new Date( '05/29/2015' )] = 'selected';
        eventDates[ new Date( '05/30/2015' )] = 'selected';
        eventDates[ new Date( '05/31/2015' )] = 'selected';
        eventDates[ new Date( '06/03/2015' )] = 'unavailable';
        eventDates[ new Date( '06/05/2015' )] = 'unavailable';
        eventDates[ new Date( '06/11/2015' )] = 'unavailable';
        eventDates[ new Date( '06/10/2015' )] = 'unavailable';
        eventDates[ new Date( '06/21/2015' )] = 'unavailable';

        $( ".section-booking .date-picker-inline" ).datepicker({
            beforeShowDay: function(date) {
                // check if date is in your array of dates
                var highlight = eventDates[date];
                if (highlight) {
                    // if it is return the following.
                    return [true, 'css-class-to-highlight ' + highlight, ''];
                } else {
                    // default
                    return [true, '', ''];
                }
            }
        });

        var now = new Date();
        $( ".section-booking .date-picker-inline.second").datepicker("setDate", new Date(now.getFullYear(), now.getMonth()+1, now.getDate()))


        if ($('select').length > 0) {
            $('select').selectpicker({

            });
        }

    } );
} );

$(window).resize( function(){

    /* Resize Accommodations Images Container */
    var container_width = $('.container').outerWidth();
    if (container_width >= 970) {
        var window_width = $(window).outerWidth();
        var width = container_width * 2 / 3 + (window_width - container_width) / 2 + 15;
        $('.rooms-thumb-area .container').css('width', width);
    }

});
