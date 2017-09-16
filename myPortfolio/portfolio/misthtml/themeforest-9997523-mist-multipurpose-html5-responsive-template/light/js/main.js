							/* ====================================================== */
							/* ---------------->>> JS Files Structue <<<------------- */
							/* ====================================================== */ 
/* 

	1.	- Calculating The Browser Scrollbar Width
	2.	- Form Stylization
	3.	- Full Width Box
	4.	- Animations
	5.	- Animation Progress Bars
	6.	- Fixed Header
	7.	- Header Menu
	8.	- Top Menu 
			- Nav Toggle 
	9.	- One Page
	10. - Accordion
			- Some open
			- Always open
			
	11. - Tabs
	12. - Footer structure (max-width < 768)
	13. - Counter
	14. - Slider
	15. - Banner set
	16. - Carousel
	17. - Modern Gallery
	18. - Grid Layout
	19. - Chart
	20. - Portfolio Filter
	21. - Add your review
	22. - Blur
	23. - Paralax
	24. - PrettyPhoto
	25. - Video Background
	26. - Page Loader
	27. - Google Map
	28. - Remove Video
	29. - Word Rotate
	30. - Modal
	31. - Social Feed
			- Social Photo Streaming
	32. - IE
			- Replace img > IE8
			- Touch device
			- Meta Head
			
	33. - Bootstrap
			- Bootstrap Elements
			- Bootstrap Validator
			- Bootstrap Datepicker
			
	34. - Revolution Slider
	35. - Progress Bar
	36. - owl Slider
	37. - Progress Bar	
	38. - Functions
	39. - Carousel load
	40. - Language-Currency
	41. - Header Phone & Search
	42. - Cart
	43. - Product
	44. - Menu > Sidebar
	45. - Price Regulator
	46. - Contact Us Form
	47. - Coming Soon
	48. - Blink
	49. - Regulator Up/Down
	50. - Add to Cart
	51. - Emergence Price
	52. - Gallery
	53. - Country
	54. - Scroll to Top
	55. - Circular Bars - Knob
	56. - Facebook
	57  - Twitter
	58. - One Page
	59. - JS loaded
	60. - jPlayer
	61. - Scrollbar
	62. - Window Resize
	63. - Functions
	64. - Text Slider(Typed Text)
	65. - Video text slider

*/



jQuery(window).load(function() {
	"use strict";
	var $ = jQuery;
	
	$('img:not(".logo-img")').each(function() {
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
		var ieversion=new Number(RegExp.$1)
		if (ieversion>=9)
		if (typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
		  this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
		}
	} else {
		if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
			this.src = "http://placehold.it/" + ($(this).attr('width') || this.width) + "x" + ($(this).attr('height') || $(this).height());
		}
	}
	});
});

// Calculating The Browser Scrollbar Width
var parent, child, scrollWidth, bodyWidth;

if (scrollWidth === undefined) {
  parent = jQuery('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
  child = parent.children();
  scrollWidth = child.innerWidth() - child.height(99).innerWidth();
  parent.remove();
}

// Form Stylization
function formStylization() {
  var $        = jQuery,
	  radio    = 'input[type="radio"]',
	  checkbox = 'input[type="checkbox"]';
  
  $(radio).wrap('<div class="new-radio"></div>');
  $('.new-radio').append('<span></span>');
  $(checkbox).wrap('<div class="new-checkbox"></div>');
  $('.new-checkbox').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><polygon fill="#1e1e1e" points="9.298,13.391 4.18,9.237 3,10.079 9.297,17 17.999,4.678 16.324,3 "/></svg>');
  $(checkbox + ':checked').parent('.new-checkbox').addClass('checked');
  $(radio + ':checked').parent('.new-radio').addClass('checked');
  $(checkbox + ':disabled').parent().addClass('disabled');
  $(radio + ':disabled').parent().addClass('disabled');
  
  $('html').click(function(){
	$(radio).parent('.new-radio').removeClass('checked');
	$(radio + ':checked').parent('.new-radio').addClass('checked');
	$(checkbox).parent('.new-checkbox').removeClass('checked');
	$(checkbox + ':checked').parent('.new-checkbox').addClass('checked');
	$(radio).parent().removeClass('disabled');
	$(checkbox).parent().removeClass('disabled');
	$(radio + ':disabled').parent().addClass('disabled');
	$(checkbox + ':disabled').parent().addClass('disabled');
  });
  
  if(typeof($.fn.selectBox) !== 'undefined') {
	$('select:not(".without-styles")').selectBox();
  }
}

// Full Width Box
function fullWidthBox() {
  var $ = jQuery;
  
  if ($('.full-width-box.auto-width').length) {
	var windowWidth = $('body').outerWidth(),
		containerWidth    = $('.header .container').width();
	  
	$('.full-width-box.auto-width').each(function() {
	  $(this)
		.css({
		  left  : ( containerWidth - windowWidth) / 2,
		  width : windowWidth
		})
		.addClass('loaded');
	});
  }
}

// Animations
function animations() {
  var $ = jQuery;

  $('[data-appear-animation]').each(function() {
	var $this = $(this);

	$this.addClass('appear-animation');

	if(!$('body').hasClass('no-csstransitions') && ($('body').width() + scrollWidth) > 767) {
	  $this.appear(function() {
		var delay = ($this.attr('data-appear-animation-delay') ? $this.attr('data-appear-animation-delay') : 1);

		if(delay > 1) $this.css('animation-delay', delay + 'ms');
		$this.addClass($this.attr('data-appear-animation'));

		setTimeout(function() {
		  $this.addClass('appear-animation-visible');
		}, delay);
	  }, {accX: 0, accY: -150});
	} else {
	  $this.addClass('appear-animation-visible');
	}
  });
  
  /* Animation Progress Bars */
  $('[data-appear-progress-animation]').each(function() {
	var $this = $(this);

	$this.appear(function() {
	  var delay = ($this.attr('data-appear-animation-delay') ? $this.attr('data-appear-animation-delay') : 1);

	  if(delay > 1) $this.css('animation-delay', delay + 'ms');
	  
	  $this.find('.progress-bar').addClass($this.attr('data-appear-animation'));

	  setTimeout(function() {
		$this.find('.progress-bar').animate({
		  width: $this.attr('data-appear-progress-animation')
		}, 500, 'easeInCirc', function() {
		  $this.find('.progress-bar').animate({
			textIndent: 10
		  }, 1500, 'easeOutBounce');
		});
	  }, delay);
	}, {accX: 0, accY: -50});
  });
}

// Header Fixed
function headerCustomizer() {
  var $            = jQuery,
	  body         = $('body'),
	  topHeight    = 0,
	  headerHeight = 0,
	  scroll       = 0,
	  fixedH       = $('.fixed-header');
  
  if ($('#top-box').length) {
	topHeight = $('#top-box').outerHeight();
  }
	
  headerHeight = $('.header').outerHeight();
  
  if (!navigator.userAgent.match(/iPad|iPhone|Android/i)) {
	scroll = topHeight;
	
	if (body.hasClass('hidden-top')) {
	  scroll = 8;
	}
	
	if (body.hasClass('padding-top')) {
	  scroll = topHeight + 420;
	} else if (body.hasClass('boxed')) {
	  scroll = topHeight + 20;
	  if (body.hasClass('fixed-header') && body.hasClass('fixed-top')) {
		scroll = 20;
	  }
	}
  
	$(window).scroll(function(){
	  var $this = $(this);
	  
	  if (body.hasClass('fixed-header')) {
		if ($this.scrollTop() >= scroll) {
		  body.addClass('fixed');
		} else {
		  body.removeClass('fixed');
		}
	  }

	  if ($this.scrollTop() >= headerHeight) {
		fixedH.addClass('background-opacity');
	  } else {
		fixedH.removeClass('background-opacity');
	  }
	});
  
	$('.hidden-top .header, .hidden-top #top-box').not('.boxed .header, .boxed #top-box').hover(function(){
	  $('.hidden-top').addClass('visible-top');
	}, function(){
	  $('.hidden-top').removeClass('visible-top');
	});
	
	$(window).scroll(function(){
	  var $this = $(this);
	  
	  if ((body.hasClass('visible-top')) && ($this.scrollTop() > 0)) {
		body.removeClass('visible-top');
	  }
	});
  }
  
  $(window).scroll(function(){
    if ($(this).scrollTop() >= topHeight + headerHeight) {
	  $('.top-fixed-box').addClass('fixed');
	} else {
	  $('.top-fixed-box').removeClass('fixed');
	}
  });
}

// Header Menu
function menu() {
  var $       = jQuery,
	  body    = $('body'),
	  primary = '.primary';
  
  $(primary).find('.parent > a .open-sub, .megamenu .title .open-sub').remove();
  
  if ((body.width() + scrollWidth) <= 979 || $('.header').hasClass('minimized-menu')) {
	$(primary).find('.parent > a, .megamenu .title').append('<span class="open-sub"><span></span><span></span></span>');
  } else {
	$(primary).find('ul').removeAttr('style').find('li').removeClass('active');
  }
  
  $(primary).find('.open-sub').click(function(event){
	event.preventDefault();
	
	var item = $(this).closest('li, .box');
	
	if ($(item).hasClass('active')) {
	  $(item).children().last().slideUp(600);
	  $(item).removeClass('active');
	} else {
	  var li = $(this).closest('li, .box').parent('ul, .sub-list').children('li, .box');
	  
	  if ($(li).is('.active')) {
		$(li).removeClass('active').children('ul').slideUp(600);
	  }
	  
	  $(item).children().last().slideDown(600);
	  $(item).addClass('active');
	  
	  if (body.width() + scrollWidth >= 979) {
		var maxHeight = body.height() - ($(primary).find('.navbar-nav')).offset().top - 20;
		
		$(primary).find('.navbar-nav').css({
		  maxHeight : maxHeight,
		  overflow  : 'auto'
		});
	  }
	}
  });

  $(primary).find('.parent > a').click(function(event){
	if (((body.width() + scrollWidth) > 979) &&  (navigator.userAgent.match(/iPad|iPhone|Android/i))) {
	  var $this = $(this);
	  
	  if ($this.parent().hasClass('open')) {
		$this.parent().removeClass('open')
	  } else {
		event.preventDefault();
		
		$this.parent().addClass('open')
	  }
	}
  });

  body.on('click', function(event) {
	if (!$(event.target).is(primary + ' *')) {
	  if ($(primary + ' .collapse').hasClass('in')) {
		$(primary + ' .navbar-toggle').addClass('collapsed');
		$(primary + ' .navbar-collapse').collapse('hide');
	  }
	}
  });
  
  
  
  /* Top Menu */
  var topMenu = $('.top-navbar').find('.collapse');

  if ((body.width() + scrollWidth) < 768) {
	topMenu.css('width', body.width());
  } else {
	topMenu.css('width', 'auto');
  }
}

/* Nav Toggle  */

function navToggle(){
	
	 if( $(".side-nav").length != 0 ) {
		/*STICKY NAVIGATION*/
		var header = jQuery('#page_top'),
			  headerPos = header.offset();
				
		  $(window).scroll(function() {
			  if( $(this).scrollTop() > headerPos.top+header.height() ) {
				  $('#sticky').addClass('nav-fixed').fadeIn('medium');
			  } else {
				  $('#sticky').removeClass('nav-fixed').fadeIn('medium');
			  }
		});
		
		/*========== Scroll ============*/	
		"use strict";
		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation-menu').outerHeight();
				$('html, body').stop().animate({					
					scrollTop : $($anchor.attr('href')).offset().top  + 0 + "px"
				}, 1200, 'easeInOutExpo');		
			event.preventDefault();
		});
		
		/* ----------- Menus hide after click -- mobile devices ----------- */	
		"use strict";
		$('#wrapper .nav li a').click(function () {
			$("#wrapper .toggle-menu").animate({ right: '-50%' }, "slow");		
			return false;
		});
		
		/* ----------- Active Navigation ----------- */		
		"use strict";
		$('body').scrollspy({ 
			target: '#wrapper',
			offset: 95
		});
		/*==========Navigation Menu============*/						   
		$("#navigation-menu").click(function(e) {
			e.preventDefault();		
			$("#wrapper .toggle-menu").animate({ right: '0px' }, "slow");		
			return false;
		});					   
		$("#navigation-close").click(function(e) {
			e.preventDefault();		
			$("#wrapper .toggle-menu").animate({ right: '-50%' }, "slow");		
			return false;
		});	
	 }
}

// One Page
function scrollMenu() {
	  
	  var $            = jQuery,
		  link         = $('a.scroll'),
		  header       = $('.header'),
		  headerHeight = header.height();
	
	
	  if(($('body').width() + scrollWidth) < 991) {
		headerHeight = 0;
	  }
	  
	  $(document).on('scroll', onScroll);
	  
	  link.on('click', function(e) {
		var target = $(this).attr('href'),
			$this = $(this);
			
		e.preventDefault();
		
		link.removeClass('active');
		$this.addClass('active');
		
		if ($(target).length) {
		  $('html, body').animate({scrollTop: $(target).offset().top - headerHeight}, 700);
		}
	  });
	
	
	  function onScroll(){
		var scrollPos = $(document).scrollTop();
		
		link.each(function () {
		  var currLink   = $(this),
			  refElement = $(currLink.attr('href'));
		  
		  if (
		 refElement.position().top - 79 <= scrollPos &&
		  refElement.position().top + refElement.height() > scrollPos) {
			link.removeClass('active');
			currLink.addClass('active');
		  } else {
			currLink.removeClass('active');
		  }
		}); 
		 
	  }
}


// Accordion
function accordions() {
  var $ = jQuery;
  
  //Some open
  $('.multi-collapse .collapse').collapse({
	toggle: false
  });
  
  // Always open
  $('.panel a[data-toggle="collapse"]').click( function(event){
	event.preventDefault();
	
	if ($(this).closest('.panel').hasClass('active')) {
	  if ($(this).closest('.panel-group').hasClass('one-open')) {
		event.stopPropagation();
	  }
	}
  });

  $('.collapse').on('hide.bs.collapse', function (event) {
	event.stopPropagation();
	
	$(this).closest('.panel').removeClass('active');
  });
  $('.collapse').on('show.bs.collapse', function () {
	$(this).closest('.panel').addClass('active');
  });
  
  $('.collapse.in').closest('.panel').addClass('active');
}

// Tabs
function tabs() {
  var $   = jQuery,
	  tab = $('.nav-tabs');
  
  tab.find('a').click(function (e) {
	e.preventDefault();
	
	$(this).tab('show');
  });

  if (($('body').width() + scrollWidth) < 768 && (!tab.hasClass('no-responsive')))
  {
    tab.each(function(){
	  var $this = $(this);
	  
	  if (!$this.next('.tab-content').hasClass('hidden') && !$this.find('li').hasClass('dropdown')) {
		$this.addClass('accordion-tab');

		$this.find('a').each(function(){
		  var $this = $(this),
			  id = $this.attr('href');
		  
		  $this.prepend('<span class="open-sub"></span>');
		  
		  $this.closest('.nav-tabs').next('.tab-content').find(id)
			.appendTo($this.closest('li'));
		});
		
		$this.next('.tab-content').addClass('hidden');
	  }
    });
	
	$('.accordion-tab > li.active .tab-pane').slideDown();
  }
  else
  {
	tab.find('.tab-pane').removeAttr('style', 'display');
	tab.each(function(){
	  var $this = $(this);
	  
	  if ($this.next('.tab-content').hasClass('hidden')) {
		$this.removeClass('accordion-tab');
	  
		$this.find('a').each(function(){
		  var $this = $(this),
			  id = $this.attr('href');
		  
		  $($this.closest('li').find('.tab-pane'))
			.appendTo($this.closest('.nav-tabs').next('.tab-content'));
		});
		
		$this.next('.tab-content').removeClass('hidden');
	  }
    });
  }
  
  $('.accordion-tab > li > a').on('shown.bs.tab', function (e) {
	if (($('body').width() + scrollWidth) < 768) {	  
	  var $this = $(this),
		  tab = $this.closest('li');
	  
	  e.preventDefault();
	  
	  $this
		.closest('.accordion-tab')
		.find('.tab-pane').not(tab.find('.tab-pane'))
		  .removeClass('active')
		  .slideUp();
	  tab.find('.tab-pane')
		.addClass('active')
		.slideDown();

	  $('html, body').on("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
		$('html, body').stop();
	  });
	  
	  setTimeout(function(){ 
		$('html, body').animate({
		  scrollTop: $this.offset().top
		}, 800);
	  }, 500 );
	}
  });
}

// Footer structure (max-width < 768)
function footerStructure() {
  var $      = jQuery,
	  footer = $('#footer .footer-bottom');
  
  if (($('body').width() + scrollWidth) < 768) {
	if (!footer.find('.new-copyright').length) {
	  footer.find('.address').after('<div class="new-copyright"></div>');
	  footer.find('.copyright').appendTo('#footer .footer-bottom .new-copyright');
	}
  } else {
	if (footer.find('.new-copyright').length) {
	  footer.find('.copyright').prependTo('#footer .footer-bottom .row');
	  footer.find('.new-copyright').remove();
	}
  }
}

// Counter

function counterItem() {
	(function($){			
		$(".count-number").appear(function(){
			$(this).each(function(){
				datacount = $(this).attr('data-count');
				$(this).find('.counter').delay(6000).countTo({
					from: 10,
					to: datacount,
					speed: 3000,
					refreshInterval: 50,
				});
			});
		});
	})(jQuery);
}

// Slider
function openItem( $item ) {
  var $ = jQuery;
  
  $item.addClass('active');
  $item.stop().children('.slid-content').animate({
	opacity: 1
  });
}
function mistSlider() {
  var $ = jQuery,
	  parameters,
	  slider = $('.mist-slider');
  
  slider.each(function () {
	var $this = $(this);
	
	if ($this.hasClass('mist-slider-two')) {
	  parameters = {
		responsive : true,
		auto       : true,
		pagination : $(this).closest('.slider').find('.pagination'),
		scroll     : {
		  duration : 1000,
		  pauseOnHover : true
        },
		items      : {
		  visible : 1,
		},
		swipe     : {
		  onMouse : false,
		  onTouch : true
		},
		onCreate  : function( data ) {
		  $this.find('.slider-wrapper').css('height', data.height)
		}
	  }
	} else if ($this.hasClass('mist-slider-three')) {
	  parameters = {
		responsive : true,
		auto       : true,
		items      : {
		  visible : 1,
		},
		scroll     : {
		  fx : 'crossfade',
		  duration : 1000,
		  pauseOnHover : true
        },
		swipe      : {
		  onMouse: false,
		  onTouch: true
		}
	  }
	} else if ($this.hasClass('mist-slider-four')) {
	  parameters = {
		responsive : true,
		auto       : true,
		items      : {
		  visible : 1,
		},
		scroll     : {
		  duration : 1000,
		  pauseOnHover : true
        },
		next       : $(this).closest('.slider').find('.next'),
		prev       : $(this).closest('.slider').find('.prev'),
		swipe      : {
		  onMouse: false,
		  onTouch: true
		}
	  }
	} else {
	  parameters = {
		responsive : true,
		scroll     : {
		  fx : 'crossfade',
		  duration : 700,
		  onBefore : function( data ) {
			data.items.old.stop().children('.slid-content').animate({
			  opacity: 0
			});
		  },
		  onAfter  : function( data ) {
			openItem( data.items.visible );
		  }
		},
		auto       : false,
		next       : $(this).closest('.slider').find('.next'),
		prev       : $(this).closest('.slider').find('.prev'),
		pagination : $(this).closest('.slider').find('.pagination'),
		items      : {
		  visible : 1,
		},
		swipe      : {
		  onMouse: false,
		  onTouch: true
		},
		onCreate   : function( data ) {
		  openItem(data.items);
		}
	  }
	}
  });
  
  slider.find('.sliders-box').each(function () {
	$(this).carouFredSel(parameters).parents('.slider').removeClass('load');
  });
}

// Banner set
function bannerSetCarousel() {
  var $ = jQuery;
  
  $('.banner-set .banners').each(function () {
	var bannerSet = $(this).closest('.banner-set'),
		prev = bannerSet.find('.prev'),
		next = bannerSet.find('.next'),
		height;

	$(this).carouFredSel({
	  auto       : false,
	  width      : '100%',
	  responsive : false,
	  infinite   : false,
	  next       : next,
	  prev       : prev,
	  pagination : bannerSet.find('.pagination'),
	  swipe      : {
		onMouse : false,
		onTouch : true
	  },
	  scroll: 1,
	  onCreate: function () {
		height = $(this).height();
		
		$(this).find('.banner').css({
		  height : height
		});
		if (bannerSet.hasClass('banner-set-mini') && bannerSet.hasClass('banner-set-no-pagination')) {
		  $(this).closest('.banner-set').find('.prev, .next').css({
			marginTop : -((height / 2) + 7)
		  });
		}
	  }
	}).parents('.banner-set').removeClass('load');
  });
}

// Carousel
function carousel() {
  var $ = jQuery;
  
  if ($('.carousel-box .carousel').length) {
	var carouselBox = $('.carousel-box .carousel');

	carouselBox.each(function () {
	  var carousel = $(this).closest('.carousel-box'),
		  swipe,
		  autoplay,
		  prev,
		  next,
		  pagitation,
		  scroll,
		  responsive = false;
		  
	  if (carousel.hasClass('no-swipe')) {
		swipe = false;
	  } else {
		swipe = true;
	  }
	  
	  if (carousel.attr('data-carousel-autoplay') == 'true') {
		autoplay = true;
	  } else {
		autoplay = false;
	  }
	  
	  
	  if (carousel.attr('data-carousel-scroll') == '2') {
		scroll = 2;
	  }
	  else if (carousel.attr('data-carousel-scroll') == '3') {
		scroll = 3;
	  }
	  else if (carousel.attr('data-carousel-scroll') == '4') {
		scroll = 4;
	  }
	  else{
		scroll = 1;
	  }
	  
	  if (carousel.attr('data-carousel-nav') == 'false') {
		next = false;
		prev = false;
		carousel.addClass('no-nav');
	  } else {
		next = carousel.find('.next');
		prev = carousel.find('.prev');
		carousel.removeClass('no-nav');
	  }
	  
	  if (carousel.attr('data-carousel-pagination') == 'true') {
		pagination = carousel.find('.pagination');
		carousel.removeClass('no-pagination');
	  } else {
		pagination = false;
		carousel.addClass('no-pagination');
	  }
	  
	  if (carousel.attr('data-carousel-one') == 'true') {
		responsive = true;
	  }
	  
	  $(this).carouFredSel({
		onCreate : function () {
		  $(window).on('resize', function(event){
			event.stopPropagation();
		  });
		},
		auto       : autoplay,
		width      : '100%',
		infinite   : false,
		next       : next,
		prev       : prev,
		pagination : pagination,
		responsive : responsive,
		swipe      : {
		  onMouse : true,
		  onTouch : swipe
		},
		scroll     : scroll
	  }).parents('.carousel-box').removeClass('load');
	});
  }
}


function thumblist() {
  var $ = jQuery;
  
  if ($('#thumblist').length) {
	$('#thumblist').carouFredSel({
	  prev  : '.thumblist-box .prev',
	  next  : '.thumblist-box .next',
	  width : '100%',
	  auto  : false,
	  swipe : {
		onMouse : false,
		onTouch : true
	  }
	}).parents('.thumblist-box').removeClass('load');
  }
}

// Modern Gallery
function modernGallery() {
  var $ = jQuery;
  
  if(typeof($.fn.imagesLoaded) !== 'undefined') {
	var $container = $('#gallery-modern'),
		bodyWidth  = $('body').width();
  
	$container.imagesLoaded( function() {
	  if ((bodyWidth + scrollWidth) >= 1200) {
		$container.masonry({
		  columnWidth: 300,
		  itemSelector: '.images-box'
		}); 
	  } else if ((bodyWidth + scrollWidth) <= 1199 && (bodyWidth + scrollWidth) ) {
		$container.masonry({
		  columnWidth: 242.5,
		  itemSelector: '.images-box'
		}); 
	  } else if ((bodyWidth + scrollWidth) <= 979 && (bodyWidth + scrollWidth) >= 768 ) {
		$container.masonry({
		  columnWidth: 187.5,
		  itemSelector: '.images-box'
		}); 
	  }
	});
  }

}

// Grid Layout
function gridLayout() {
  var $ = jQuery;
  
  $('#grid-layout').imagesLoaded( function() {

		 $('#grid-layout').isotope({
		
		  layoutMode: 'masonry',
		
		  itemSelector: '.grid-posts',
		
		  transformsEnabled: false,
		
		  resizesContainer: true   
		
		 }); 

	});

}

// Chart
function chart() {
	
jQuery(window).load( function(){
		var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [10,20,40,70,100,90,40]
				},
				{
					fillColor : "rgba(151,187,205,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [70,30,60,40,50,30,60]
				},
				{
					fillColor : "rgba(255,196,0,0.5)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					data : [10,40,100,70,30,80,50]
				}
			]
		};

		var barChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					fillColor : "rgba(255,196,0,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					data : [50,70,90,60,70,40,50]
				}
			]

		};

		var radarChartData = {
			labels : ["Html5","Css3","Jquery","Wordpress","Joomla","Drupal","Design"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					data : [65,59,90,81,56,55,40]
				},
				{
					fillColor : "rgba(255,196,0,0.5)",
					strokeColor : "rgba(255,196,0,1)",
					pointColor : "rgba(255,196,0,1)",
					pointStrokeColor : "#fff",
					data : [28,48,40,19,96,27,100]
				}
			]

		};

		var pieChartData = [
			{
				value: 90,
				color:"#ffc400"
			},
			{
				value : 30,
				color : "#229e05"
			},
			{
				value : 60,
				color : "#171717"
			},
			{
				value : 100,
				color : "#004eff"
			},
			{
				value : 20,
				color : "#584A5E"
			}

		];

		var polarAreaChartData = [
			{
				value : 60,
				color: "#ffc400"
			},
			{
				value : 70,
				color: "#cccccc"
			},
			{
				value : 60,
				color: "#171717"
			},
			{
				value : 30,
				color: "#229e05"
			},
			{
				value : 50,
				color: "#004eff"
			},
			{
				value : 20,
				color: "#584A5E"
			}
		];

		var doughnutChartData = [
			{
				value: 30,
				color:"#ffc400"
			},
			{
				value : 50,
				color : "#cccccc"
			},
			{
				value : 100,
				color : "#171717"
			},
			{
				value : 40,
				color : "#004eff"
			},
			{
				value : 120,
				color : "#4D5360"
			}
		];

		function showLineChart(){
			var ctx = document.getElementById("lineChartmist").getContext("2d");
			 new Chart(ctx).Line(lineChartData, {	responsive: true	});
		}

		function showBarChart(){
			var ctx = document.getElementById("barChartmist").getContext("2d");
			new Chart(ctx).Bar(barChartData, {	responsive: true	});
		}

		function showRadarChart(){
			var ctx = document.getElementById("radarChartmist").getContext("2d");
			new Chart(ctx).Radar(radarChartData, {	responsive: true	});
		}

		function showPolarAreaChart(){
			var ctx = document.getElementById("polarAreaChartmist").getContext("2d");
			new Chart(ctx).PolarArea(polarAreaChartData, {	responsive: true	});
		}

		function showPieChart(){
			var ctx = document.getElementById("pieChartmist").getContext("2d");
			new Chart(ctx).Pie(pieChartData,{	responsive: true	});
		}
		function showDoughnutChart(){
			var ctx = document.getElementById("doughnutChartmist").getContext("2d");
			new Chart(ctx).Doughnut(doughnutChartData,{	responsive: true	});
		}

		$('#lineChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showLineChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#barChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showBarChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#radarChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showRadarChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#polarAreaChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPolarAreaChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#pieChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPieChart,300); },{accX: 0, accY: -155},'easeInCubic');

		$('#doughnutChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showDoughnutChart,300); },{accX: 0, accY: -155},'easeInCubic');

	});

}

// Portfolio Filter
function isotopFilter() {
  var $ = jQuery;

  $('.portfolio, .filter-box').each(function () {
	var filterBox   = $(this),
		filterElems = filterBox.find('.filter-elements'),
		buttonBox   = filterBox.find('.filter-buttons'),
		selector    = filterBox.find('.filter-buttons .active').attr('data-filter');
		var layout_Mode = $(this).data("layout");
		if( layout_Mode == null || layout_Mode == undefined ) {
			layout_Mode = "fitRows";
		}
	
	if (!filterBox.hasClass('accordions-filter')) {
	  filterElems.isotope({
		filter: selector,
		layoutMode: layout_Mode
	  });
	  buttonBox.find('.dropdown-toggle').html(filterBox.find('.filter-buttons .active').text() + '<span class="caret"></span>')
	}

	buttonBox.find('a').on('click', function(e){
	  var selector = $(this).attr('data-filter');
	  e.preventDefault();
	  
	  if (!$(this).hasClass('active')) {
		buttonBox.find('a').removeClass('active');
		$(this).addClass('active');
		buttonBox.find('.dropdown-toggle').html($(this).text() + '<span class="caret"></span>')

		if (filterBox.hasClass('accordions-filter')) {
		  filterElems.children().not(selector)
			.animate({ height : 0 })
			.addClass('e-hidden');
		  filterElems.children(selector)
			.animate({ height : '100%' })
			.removeClass('e-hidden');
		} else {
		  filterElems.isotope({
			filter: selector,
			layoutMode: layout_Mode
		  });
		}
	  }
	});
  });
}

// Add your review
function addReview() {
  var $ = jQuery;
  
  $('a[href="#reviews"].add-review').click(function(){
	$('.product-tab a[href="#reviews"]').trigger('click');
	
	$('html, body').animate({
	  scrollTop: $("#reviews").offset().top
	}, 1000);
  });
}

// Zoomer
function zoom() {
  var $ = jQuery;
  
  if ($.fn.elevateZoom) {
	var image      = $('.general-img').find('img'),
		zoomType,
		zoomWidth  = 470,
		zoomHeight = 470,
		zoomType   = 'window';
	
	if (($('body').width() + scrollWidth) < 992) {
	  zoomWidth  = 0;
	  zoomHeight = 0;
	  zoomType   = 'inner';
	}
	
	image.removeData('elevateZoom');
	$('.zoomContainer').remove();
  
	image.elevateZoom({
	  gallery            : 'thumblist', 
	  cursor             : 'crosshair',
	  galleryActiveClass : 'active',
	  zoomWindowWidth    : zoomWidth,
	  zoomWindowHeight   : zoomHeight,
	  borderSize         : 0,
	  borderColor        : 'none',
	  lensFadeIn         : true,
	  zoomWindowFadeIn   : true,
	  zoomType		     : zoomType
	});
  }
}

// Blur
function blur() {
  var $ = jQuery;

  $('.full-width-box .fwb-blur').each(function () {
	var blurBox = $(this),
		img     = new Image(),
		amount  = 2,
		prependBox = '<div class="blur-box"></div>';
		
	img.src = blurBox.attr('data-blur-image');
	
	if (
		blurBox.attr('data-blur-amount') !== undefined &&
		blurBox.attr('data-blur-amount') !== false
	  )
	amount = blurBox.attr('data-blur-amount');
  
	img.onload = function() {
	  Pixastic.process(img, "blurfast", {
		amount: amount
	  });
	}
	
	if (blurBox.hasClass('paralax')) {
	  prependBox = '<div class="blur-box" data-stellar-ratio="0.5"></div>';
	}

	blurBox
	  .prepend( prependBox )
	  .find('.blur-box')
		.prepend( img )
		setTimeout(function(){ 
		  $('body').addClass('blur-load');
		}, 0 );
  });
}

function blurPage() {
  var $ = jQuery;

  if ($('.blur-page').length) {
	var blurBox = $('.blur-page');
	
	blurBox.each(function () {
	  var $this = $(this),
		  img     = new Image(),
		  amount  = 2,
		  prependBox = '<div class="blur-box"></div>';
		  
	  img.src = $this.attr('data-blur-image');
	  
	  if (
		  $this.attr('data-blur-amount') !== undefined &&
		  $this.attr('data-blur-amount') !== false
		)
	  amount = $this.attr('data-blur-amount');

	  img.onload = function() {
		Pixastic.process(
		  img,
		  'blurfast',
		  {
			amount: amount
		  },
		  function(){
			$('.blur-page').addClass('blur-load')
		  }
		);
	  }

	  $this.prepend( prependBox ).find('.blur-box').prepend( img );
	});
  }
}

// Paralax
function paralax() {
  var $ = jQuery;
  
  if(typeof($.fn.stellar) !== 'undefined') {
	if(!navigator.userAgent.match(/iPad|iPhone|Android/i) && ($('body').width() + scrollWidth) >= 979) {
	  $('body').stellar({
		horizontalScrolling: false,
		verticalOffset: 0,
		horizontalOffset: 0,
		responsive: true,
		scrollProperty: 'scroll',
		parallaxElements: false,
	  });
	}
  }
}


// Owl Slider

function OwlSlider(){

	(function($) {
		"use strict";
		if ($('.owl-carousel').length) {		    
			  $(".owl-carousel").each(function (index) {
			  
				var effect_mode = $(this).data('effect');
				var autoplay = $(this).data('autoplay');
				
				$(this).owlCarousel({ 
					transitionStyle: effect_mode,
					autoplay: autoplay,
					navigation : true,
					pagination : false, 
					singleItem : true					
				});
			});
		}  
	 })(jQuery);

}


// PrettyPhoto
function prettyPhoto() {
	(function($) {
		"use strict";
		if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
		 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', theme: "dark_square", social_tools: false, deeplinking: false});
		}
	 })(jQuery);
}

// Video Background
function videoBg() {
  var $ = jQuery;
  
  if(typeof($.fn.tubular) !== 'undefined') {
	var id,
		options,
		poster,
		youtube = $('.fwb-youtube-video');
		
	if (
		youtube.attr('data-youtube-videoId') !== undefined &&
		youtube.attr('data-youtube-videoId') !== false) {
	  id = youtube.attr('data-youtube-videoId');
	}
	
	if (
		youtube.attr('data-youtube-poster') !== undefined &&
		youtube.attr('data-youtube-poster') !== false) {
	  poster = youtube.attr('data-youtube-poster');
	}
	
	options = {
	  videoId: id,
	  start: 0,
	  wrapperZIndex: -1,
	  mute: true,
	  width: $('body').width()
	}
  
	if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
	  youtube.css('background-image', "url('"+poster+"')");
	} else {
	  youtube.tubular(options);
	}
  }
}


function YTBvideoBg() {

        if (typeof $.fn.mb_YTPlayer != 'undefined' && $.isFunction($.fn
            .mb_YTPlayer)) {
            var m = false;

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.userAgent)) {
                m = true
            }

            var v = $('.player');
            if (m == false) {
                v.mb_YTPlayer();
                $('#video-controls a')
                    .each(function() {
                        var t = $(this);
                        t.on('click', (function(e) {
                            e.preventDefault();
                            if (t.hasClass(
                                'fa-volume-off')) {
                                t.removeClass(
                                        'fa-volume-off'
                                    )
                                    .addClass(
                                        'fa-volume-down'
                                    );
                                v.unmuteYTPVolume();
                                return false
                            }
                            if (t.hasClass(
                                'fa-volume-down')) {
                                t.removeClass(
                                        'fa-volume-down'
                                    )
                                    .addClass(
                                        'fa-volume-off'
                                    );
                                v.muteYTPVolume();
                                return false
                            }
                            if (t.hasClass('fa-pause')) {
                                t.removeClass(
                                        'fa-pause')
                                    .addClass('fa-play');
                                v.pauseYTP();
                                return false
                            }
                            if (t.hasClass('fa-play')) {
                                t.removeClass('fa-play')
                                    .addClass(
                                        'fa-pause');
                                v.playYTP();
                                return false
                            }
                        }));
                    });
                $('#video-controls')
                    .show();
            }
        }

    }
	
// Page Loader
function pageLoader() {	
	(function($) {
		"use strict";
		
		$(".loader-item").delay(700).fadeOut();
	
		$("#pageloader").delay(800).fadeOut("slow");
	})(jQuery);
}
	
//Login/Register Page
function loginRegister() {
  var $ = jQuery;
  
  if(typeof($.fn.isotope) !== 'undefined') {
  
	var filterBox   = $('.login-register'),
		filterElems = filterBox.find('.filter-elements'),
		buttonBox   = filterBox.find('.filter-buttons'),
		selector    = filterBox.find('.filter-buttons.active-form').attr('data-filter');
	
	filterElems.removeClass('hidden');
	filterElems.isotope({
	  filter: selector,
	  layoutMode: 'fitRows'
	});
  
	buttonBox.click(function(e){
	  var selector = $(this).attr('data-filter');
	  
	  e.preventDefault();
	  
	  if (!$(this).hasClass('active-form')) {
		buttonBox.removeClass('active-form');
		$(this).addClass('active-form');
  
		filterElems.isotope({
		  filter: selector,
		  layoutMode: 'fitRows'
		});
	  }
	});
  }
  
  var height  = 0,
	  form    = $('.form-content');
  
  form.each(function () {
	if ($(this).outerHeight() > height) {
	  height = $(this).outerHeight();
	}
  });
  
  form.css('height', height)
  
  $('.switch-form').click(function (e) {
	var button  = $(this),
		formBox = $('.form-box');
		
	e.preventDefault();
	
	if ($(this).hasClass('forgot')) {
	  $('.form-content').removeClass('hidden');
	  $('.register-form').closest('.form-content').addClass('hidden');
	} else if ($(this).hasClass('sing-up')) {
	  $('.form-content').removeClass('hidden');
	  $('.forgot-form').closest('.form-content').addClass('hidden');
	}
	
	$('.login-register .rotation').toggleClass('hover');
  });
}

function loadingButton() {
  var $ = jQuery;
  
  loading = function(){
	if ($('.ladda-button.progress-button').length) {
	  Ladda.bind('.ladda-button:not(.progress-button)', {
		timeout: 2000
	  });
	  
	  Ladda.bind('.ladda-button.progress-button', {
		callback: function(instance) {
		  var interval,
			  progress;
			  
		  progress = 0;
		  
		  return interval = setInterval(function() {
			progress = Math.min(progress + Math.random() * 0.1, 1);
			instance.setProgress(progress);
			if (progress === 1) {
			  instance.stop();
			  return clearInterval(interval);
			}
		  }, 200);
		}
	  });
	}
  }
  
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
	var ieversion = new Number(RegExp.$1);
	
	if (ieversion >= 9) {
	  loading();
	}
  } else {
	loading();
  }
}

function productLimited() {
  var $ = jQuery;
  
  if ($('.product .limit-offer').length){
	var product = $('.product .limit-offer'),
		endDateTime = '';
		
	product.each(function () {
	  var $this = $(this);
	  
	  if (
		$this.attr('data-end') !== undefined &&
		$this.attr('data-end') !== false) {
		endDateTime = $this.attr('data-end');
	  } else {
		endDateTime = '';
	  }
  
	  $this.county({
		endDateTime: new Date(endDateTime),
		animation: 'scroll',
		reflection: false
	  });
	});
  }
}

// Google Map
function initialize() {
  var $ = jQuery,
  mapCanvas = $('.map-canvas');
  
  mapCanvas.each(function () {
	var $this           = $(this),
		zoom            = 8,
		lat             = -34,
		lng             = 150,
		scrollwheel     = false,
		draggable       = true,
		mapType         = google.maps.MapTypeId.ROADMAP,
		title           = '',
		contentString   = '',
		dataZoom        = $this.attr('data-zoom'),
		dataLat         = $this.attr('data-lat'),
		dataLng         = $this.attr('data-lng'),
		dataType        = $this.attr('data-type'),
		dataScrollwheel = $this.attr('data-scrollwheel'),
		dataHue         = $this.attr('data-hue'),
		dataTitle       = $this.attr('data-title'),
		dataContent     = $this.attr('data-content');
		
	if (dataZoom !== undefined && dataZoom !== false) {
	  zoom = parseFloat(dataZoom);
	}

	if (dataLat !== undefined && dataLat !== false) {
	  lat = parseFloat(dataLat);
	}
	
	if (dataLng !== undefined && dataLng !== false) {
	  lng = parseFloat(dataLng);
	}
	
	if (dataScrollwheel !== undefined && dataScrollwheel !== false) {
	  scrollwheel = dataScrollwheel;
	}
	
	if (dataType !== undefined && dataType !== false) {
	  if (dataType == 'satellite') {
		mapType = google.maps.MapTypeId.SATELLITE;
	  } else if (dataType == 'hybrid') {
		mapType = google.maps.MapTypeId.HYBRID;
	  } else if (dataType == 'terrain') {
		mapType = google.maps.MapTypeId.TERRAIN;
	  }
	}
	
	if (dataTitle !== undefined && dataTitle !== false) {
	  title = dataTitle;
	}
	
	if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
	  draggable = false;
	}

	var mapOptions = {
	  zoom        : zoom,
	  scrollwheel : scrollwheel,
	  draggable   : draggable,
	  center      : new google.maps.LatLng(lat, lng),
	  mapTypeId   : mapType
	};
  
	var map = new google.maps.Map($this[0], mapOptions);
	
	var image = 'img/png-icons/map-marker.png';
	
	if (dataContent !== undefined && dataContent !== false) {
	  contentString = '<div class="map-content">' +
		'<h3 class="title">' + title + '</h3>' +
		dataContent +
	  '</div>';
	}

	var infowindow = new google.maps.InfoWindow({
      content: contentString
	});
	
	var marker = new google.maps.Marker({
	  position : new google.maps.LatLng(lat, lng),
	  map      : map,
	  icon     : image,
	  title    : title
	});
	
	if (dataContent !== undefined && dataContent !== false) {
	  google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	  });
	}
	
	if (dataHue !== undefined && dataHue !== false) {
	  var styles = [
		{
		  stylers : [
			{ hue : dataHue },
			{ saturation: 80 },
			{ lightness: -10 }
		  ]
		}
	  ];
	  
	  map.setOptions({styles: styles});
	}
  });
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
    'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

// Remove Video
if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
  jQuery('.fwb-video').find('video').remove();
}

// Word Rotate
function wordRotate() {
  var $ = jQuery;
  
  $('.word-rotate').each(function() {
	var $this = $(this),
		wordsBox = $this.find('.words-box'),
		words = wordsBox.find('> span'),
		firstWord = words.eq(0),
		firstWordClone = firstWord.clone(),
		wordHeight,
		currentItem = 1,
		currentTop = 0;
	
	wordHeight = firstWord.height();
	
	wordsBox.append(firstWordClone);
	
	$this.height(wordHeight).addClass('loaded');
	
	setInterval(function() {
	  currentTop = (currentItem * wordHeight);
  
	  wordsBox.animate({
		top: -(currentTop) + 'px'
	  }, 300, 'easeOutQuad', function() {
		currentItem++;
  
		if(currentItem > words.length) {
		  wordsBox.css('top', 0);
		  currentItem = 1;
		}
	  });
	}, 2000);
  });
}

// Modal Window
function centerModal() {
  var $ = jQuery;
  
  $(this).css('display', 'block');
  
  var dialog = $(this).find('.modal-dialog'),
	  offset = ($(window).height() - dialog.height()) / 2;
	  
  if (offset < 10) {
	offset = 10;
  }
  dialog.css('margin-top', offset);
}

// Social Feed
function locationSocialFeed() {
  var $ = jQuery,
	  socialFeed = $('.social-feed');
  
  if(typeof($.fn.isotope) !== 'undefined') {
	socialFeed.isotope({
	  itemSelector: '.isotope-item',
	}).addClass('loaded');
	
	$('#load-more').click(function() {
	  var item1, item2, item3, items, tmp;
	  
	  items = socialFeed.find('.item-clone');
	  item1 = $(items[Math.floor(Math.random() * items.length)]).clone();
	  item2 = $(items[Math.floor(Math.random() * items.length)]).clone();
	  item3 = $(items[Math.floor(Math.random() * items.length)]).clone();
	  tmp = $().add(item1).add(item2).add(item3);
  
	  var images = tmp.find('img');
  
	  images.imagesLoaded(function(){
		return socialFeed.isotope('insert', tmp);
	  });
	});
  }
}

/* Social Photo Streaming */

function socialPhotostream() {
	if( $(".my-feeds").length != 0 ) {
		/* ================ FLICKR FEED ================ */
		$('.flickr-feed').socialstream({
			socialnetwork: 'flickr',
			limit: 12,
			username: 'google'
		})
		/* ================ PINTEREST FEED ================ */
		$('.pinterest-feed').socialstream({
			socialnetwork: 'pinterest',
			limit: 12,
			username: 'vmrkela'
		})
		/* ================ INSTAGRAM FEED ================ */
		$('.instagram-feed').socialstream({
			socialnetwork: 'instagram',
			limit: 12,
			username: 'google'
		})
		/* ================ INSTAGRAM FOOTER FEED ================ */
		$('.instagram-footer-feed').socialstream({
			socialnetwork: 'instagram',
			limit: 10,
			username: 'google'
		})
		 /* ================ DRIBBBLE FEED ================ */
		$('.dribbble-feed').socialstream({
			socialnetwork: 'dribbble',
			limit: 15,
			username: 'envato'
		})
		/* ================ NEWSFEED ================ */
		$('.instagram-footer-feed').socialstream({
			socialnetwork: 'newsfeed',
			limit: 10,
			username: '#'
		}) 
		/* ================ PICASA FEED ================ */
		$('.picasa-feed').socialstream({
			socialnetwork: 'picasa',
			limit: 15,
			username: '#'
		});
		/* ================ YOUTUBE FEED ================ */
		$('.youtube-feed').socialstream({
			socialnetwork: 'youtube',
			limit: 15,
			username: 'Envato'
		})
	
	}
}


jQuery(document).ready(function(){
  
  var $ = jQuery;
  (function($) {
		"use strict";
		
	  // Replace img > IE8
	  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
		var ieversion = new Number(RegExp.$1);
		
		if (ieversion < 9) {
		  $('img[src*="svg"]').attr('src', function() {
			return $(this).attr('src').replace('.svg', '.png');
		  });
		}
	  }
	  
	  // IE 
	  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
		$('html').addClass('ie');
	  }

	  // Touch device
	  if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
		$('body').addClass('touch-device');
	  }
	  
	  // Meta Head
	  if (document.width > 768) {
		$('.viewport').remove();
	  }

	  // Bootstrap Elements
	  $('[data-toggle="tooltip"], .tooltip-link').tooltip();
  
	  $("a[data-toggle=popover]")
		.popover()
		.click(function(event) {
		  event.preventDefault();
		});
  
	  $('.btn-loading').click(function () {
		var btn = $(this);
		
		btn.button('loading');
		
		setTimeout(function () {
		  btn.button('reset')
		}, 3000);
	  });
  
	  $('.disabled, fieldset[disabled] .selectBox').click(function () {
		return false;
	  });
	
	  $('.modal-center').on('show.bs.modal', centerModal);
  
	  // Bootstrap Validator
	  if(typeof($.fn.bootstrapValidator) !== 'undefined') {
		$('.form-validator').bootstrapValidator({
		  excluded: [':disabled', ':hidden', ':not(:visible)'],
		  feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		  },
		  message: 'This value is not valid',
		  trigger: null
		});
	  }
  
	  // Bootstrap Datepicker
	  if(typeof($.fn.datepicker) !== 'undefined') {
		$('.datepicker-box').datepicker({
		  todayHighlight : true,
		  beforeShowDay: function (date){
			if (date.getMonth() == (new Date()).getMonth())
			  switch (date.getDate()){
				case 4:
				  return {
					tooltip: 'Example tooltip',
					classes: 'active'
				  };
				case 8:
				  return false;
				case 12:
				  return "green";
			  }
		  }
		});
	  }
  })(jQuery);
  
  (function($) {
		"use strict";
	  // Revolution Slider
	  if ($('.tp-banner').length) {
		var revolutionSlider = $('.tp-banner');
		
		if (revolutionSlider.closest('.rs-slider').hasClass('full-width')) {
		  var body         = $('body'),
			  width        = body.width(),
			  topHeight    = 0,
			  headerHeight = 74,
			  height;
			  
		  if ($('#top-box').length) {
			if (body.hasClass('hidden-top')) {
			  topHeight = $('#top-box').outerHeight() - 32;
			}
		  }
		  
		  if ((body.width() + scrollWidth) >= 1200) {
			height = body.height() - (topHeight + headerHeight);
		  } else {
			height = 800;
		  }
		  
		  revolutionSlider.revolution({
			delay             : 6000,
			startwidth        : 1200,
			startheight       : height,
			hideThumbs        : 10,
			navigationType    : 'bullet',
			navigationArrows  : 'solo',
			navigationHAlign  : 'center',
			navigationVAlign  : 'top',
			navigationHOffset : -545,
			navigationVOffset : 30,
			hideTimerBar      : 'off'
		  }).parents('.slider').removeClass('load');
		} else {
		  revolutionSlider.revolution({
			delay          : 6000,
			startwidth     : 1200,
			startheight    : 700,
			hideThumbs     : 10,
			navigationType : 'none',
			onHoverStop    : 'off'
		  }).parents('.slider').removeClass('load');
		}
	  }
	  	  

	 // Progress Bar				
	  $('.progress-bar').each(function() {
		$(this).appear(function(){
		 var datavl = $(this).attr('data-percentage');
		 $(this).animate({ "width" : datavl + "%"}, '1200');
		});
	  });
	
  })(jQuery);
  
  // Functions
  pageLoader();
  fullWidthBox();
  menu();
  scrollMenu();
  footerStructure();
  tabs();
  accordions();
  headerCustomizer();
  modernGallery();
  gridLayout();
  animations();
  chart();
  formStylization();
  addReview();
  zoom();
  paralax();
  videoBg();
  YTBvideoBg();
  loginRegister();
  loadingButton();
  productLimited();
  blurPage();
  wordRotate();
  counterItem();  
  OwlSlider();
  prettyPhoto();
  locationSocialFeed();
  socialPhotostream();
  navToggle();
  typedSlider();
  videoTextSlider();
  subscribeForm()
  
  // Carousel load
  $(window).on({
    load : function() {
	  blur();
      mistSlider();
      bannerSetCarousel();
      thumblist();
      carousel();
	  isotopFilter();
    }
  });
  
  (function($) {
		"use strict";
	  // Language-Currency
	  if( !navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
		$('.language, .currency, .sort-by, .show-by').hover(function(){
		  $(this).addClass('open');
		}, function(){
		  $(this).removeClass('open');
		});
	  }
   })(jQuery);
  
  (function($) {
		"use strict";
	  // Header Phone & Search
	  $('.phone-header > a').click(function(event){
		event.preventDefault();
		$('.btn-group').removeClass('open');
		$('.phone-active').fadeIn().addClass('open');
		$('.header-wrapper .navbar').fadeIn().addClass('top-search-open');
	  });
	  $('.search-header > a').click(function(event){
		event.preventDefault();
		$('.btn-group').removeClass('open');
		$('.search-active').fadeIn().addClass('open');
		$('.header-wrapper .navbar').fadeIn().addClass('top-search-open');
	  });
	  $('.share-header > a').click(function(event){
		event.preventDefault();
		$('.btn-group').removeClass('open');
		$('.share-active').fadeIn().addClass('open');
		$('.header-wrapper .navbar').fadeIn().addClass('top-search-open');
	  });
  
	  $('.phone-active .close, .search-active .close, .share-active .close').click(function(event){
		event.preventDefault();
		$(this).parent().fadeOut().removeClass('open');
		$('.header-wrapper .navbar').fadeIn().removeClass('top-search-open');
	  });
  
	  $('body').on('click', function(event) {
		var phone  = '.phone-active',
			search = '.search-active',
			share = '.share-active';
		
		if ((!$(event.target).is(phone + ' *')) && (!$(event.target).is('.phone-header *'))) {
		  if ($(phone).hasClass('open')) {
			$(phone).fadeOut().removeClass('open');
			$('.header-wrapper .navbar').fadeIn().removeClass('top-search-open');
		  }
		}
		if ((!$(event.target).is(search + ' *')) && (!$(event.target).is('.search-header *'))) {
		  if ($(search).hasClass('open')) {
			$(search).fadeOut().removeClass('open');
			$('.header-wrapper .navbar').fadeIn().removeClass('top-search-open');
		  }
		}
		if ((!$(event.target).is(share + ' *')) && (!$(event.target).is('.share-header *'))) {
		  if ($(share).hasClass('open')) {
			$(share).fadeOut().removeClass('open');
			$('.header-wrapper .navbar').fadeIn().removeClass('top-search-open');
		  }
		}
	  });
  })(jQuery);
  
  (function($) {
		"use strict";
	  // Cart
	  $('.cart-header').hover(function(){
		if (($('body').width() + scrollWidth) >= 979 ) {
		  $(this).addClass('open');
		}
	  }, function(){
		if (($('body').width() + scrollWidth) >= 979 ) {
		  $(this).removeClass('open');
		}
	  });
  })(jQuery);
  
  (function($) {
		"use strict";
	  // Product
	  if(!navigator.userAgent.match(/iPad|iPhone|Android/i)) {
		$('.product, .employee')
		  .hover(function(event) {
			event.preventDefault();
			
			$(this).addClass('hover');
		  }, function(event) {
			event.preventDefault();
			
			$(this).removeClass('hover');
		  });
	  }
  
	  $('body').on('touchstart', function (event) {
		event.stopPropagation();
		
		if ($(event.target).parents('.product, .employee').length==0) {
		  $('.product, .employee').removeClass('hover');
		}
	  });

	  $('.product, .employee').on('touchend', function(event){
		if ($(this).hasClass('hover')) {
		  $(this).removeClass('hover');
		} else {
		  $('.product, .employee').removeClass('hover');
		  $(this).addClass('hover');
		}
	  });
  })(jQuery);
  
  (function($) {
		"use strict";
	  // Menu > Sidebar
	  $('.menu .parent:not(".active") a').next('.sub').css('display', 'none');
	  $('.menu .parent a .open-sub').click(function(event){
		event.preventDefault();
		
		if ($(this).closest('.parent').hasClass('active')) {
		  $(this).parent().next('.sub').slideUp(600);
		  $(this).closest('.parent').removeClass('active');
		} else {
		  $(this).parent().next('.sub').slideDown(600);
		  $(this).closest('.parent').addClass('active');
		}
	  });
  
	  // Price Regulator
	  if(typeof($.fn.slider) !== 'undefined') {
		$('#Slider2').slider({
		  from          : 1,
		  to            : 5000,
		  limits        : false,
		  heterogeneity : ['0/0'],
		  step          : 50,
		  dimension     : '&nbsp;$'
		});
	  }
	  
	  if(typeof($.fn.slider) !== 'undefined') {
		$('#filter').slider({
		  from      : 2000,
		  to        : 2013,
		  limits    : false,
		  step      : 1,
		  dimension : '',
		  calculate : function( value ){
			return ( value );
		  }
		});
	  }
	  $('.jslider-pointer').html('\n\
		<i class="fa fa-bolt text-color"></i>\n\
	  ');
  
	  // Contact Us Form
	  $('#submit').click(function(){
		$.post('php/form.php', $('#contactform').serialize(),  function(data) {
		  $('#success').html(data).animate({opacity: 1}, 500, function(){
			if ($(data).is('.send-true')) {
			  $('#contactform').trigger( 'reset' );
			}
		  });
		});
		return false;
	  });
	
  	  // Coming Soon
	  $('#join-us').click(function(){
		$.post('php/sent-email.php', $('#sent-email').serialize(),  function(data) {
		  $('#sent-email .success').html(data).animate({opacity: 1}, 500, function(){
			if ($(data).is('.send-true')) {
			  $('#sent-email').trigger( 'reset' );
			}
		  });
		});
		return false;
	  });
   })(jQuery);
  
  // Blink
   function blinker() {
		$('.blink_me').fadeOut(500);
		$('.blink_me').fadeIn(500);
	}

	setInterval(blinker, 1000); //Runs every second
	
   (function($) {
		"use strict";
	  // Regulator Up/Down
	  $('.number-up').click(function(){
		var $value = ($(this).closest('.number').find('input[type="text"]').attr('value'));
		$(this).closest('.number').find('input[type="text"]').attr('value', parseFloat($value)+1);
		return false;
	  });
	  $('.number-down').click(function(){
		var $value = ($(this).closest('.number').find('input[type="text"]').attr('value'));
		if ($value > 1) {
		  $(this).closest('.number').find('input[type="text"]').attr('value', parseFloat($value)-1);
		}
		return false;
	  });
	  
	  // Add to Cart
	  $(".add-cart-form .add-cart").click(function() {
		$(this).next('.number').find('input[type="text"]').attr('value', 1);
		return false;
	  });
  
	  // Emergence Price
	  $('.emergence-price').click(function(){
		$(this).animate({opacity: "0"}, 0);
		$(this).prev('.price').fadeIn(1000);
		return false;
	  });
  
	  // Gallery
	  if ($.fn.fancybox){
		$('.gallery-images, .lightbox').fancybox({
		  nextEffect  : 'fade',
		  prevEffect  : 'fade',
		  openEffect  : 'fade',
		  closeEffect : 'fade',
		  helpers     : {
			overlay : {
			  locked : false
			}
		  },
		  tpl         : {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">×</a>',
			next : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;">\n\
					  <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xml:space="preserve"><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="1,0.001 0,1.001 7,8 0,14.999 1,15.999 9,8 "/></svg></span>\n\
					</a>',
			prev : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;">\n\
					  <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xml:space="preserve"><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="8,15.999 9,14.999 2,8 9,1.001 8,0.001 0,8 "/></svg></span>\n\
					</a>'
		  }
		});
	  }
  
	  // Country
	  if ($.fn.county){
		$('#count-down').county({
		  endDateTime: new Date('2016/01/01 0:00:00'),
		  reflection: false
		}).addClass('count-loaded');
	  }
	  
	  // Scroll to Top
	  $('#footer .up').click(function() {
		$('html, body').animate({
		  scrollTop: $('body').offset().top - 72
		}, 500);
		return false;
	  });
  })(jQuery);
  
  (function($) {
		"use strict";
	  // Circular Bars - Knob
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');
	
		  $this.knob({
			'draw' : function () { 
			  $(this.i).val(this.cv + '%')
			}
		  });
		  
		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
	  }
  
	  // Facebook
	  if ($('.facebook-widget').length) {
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_EN/all.js#xfbml=1";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	  }
  
	  // Twitter
	  if ($('.twitter-widget').length) {
		!function(d,s,id){
		  var js,
		  fjs=d.getElementsByTagName(s)[0],
		  p=/^http:/.test(d.location)?'http':'https';
		  
		  if(!d.getElementById(id)){
			js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		  }
		}(document,"script","twitter-wjs");
	  }
  
	  // One Page
	  $('a.scroll').on('click', function(e) {
		var header = $('.header'),
			headerHeight = header.height(),
			target = $(this).attr('href'),
			$this = $(this);
			
		e.preventDefault();
		
		if ($(target).length) {
		  if(($('body').width() + scrollWidth) > 991) {
			$('html, body').animate({scrollTop: $(target).offset().top - (headerHeight)}, 600);
		  } else {
			$('html, body').animate({scrollTop: $(target).offset().top}, 600);
		  }
		}
	
		$('a.scroll').removeClass('active');
			$this.addClass('active');
		});
  
	  // JS loaded
	  $('body').addClass('loaded');
   })(jQuery);
  
  // jPlayer
  if ($.fn.jPlayer){
	var player = $('#jp_container'),
	single     = player.find('.jp-playlist li'),
	playlist   = [],
	title      = "",
	artist     = "";
	
	if (single.length) {
	  single.each(function() {
		var $this = $(this);
		
		if ($this.attr('data-files') !== undefined &&  $this.attr('data-files') !== false &&  $this.attr('data-files') !== '') {
		  if ($this.attr('data-title') !== undefined &&  $this.attr('data-title') !== false)
		  title = $this.attr('data-title');
		  
		  if ($this.attr('data-artist') !== undefined &&  $this.attr('data-artist') !== false)
		  artist = $this.attr('data-artist');
		  
		  var files = $this.attr('data-files').split(';');
		  
		  files[0].split('.').pop(-1);
		  
		  if (files[0].split('.').pop(-1) == "mp3") {
			var mp3 = files[0];
			var oga = files[1];
		  } else if (files[0].split('.').pop(-1) == "ogg") {
			var mp3 = files[1];
			var oga = files[0];
		  }
		  
		  playlist.push({
			title  : title,
			artist : artist,
			free   : true,
			mp3    : mp3,
			oga    : oga
		  });
		}
	  });
	}
	
	
	
	new jPlayerPlaylist ({
	  jPlayer : '#jquery_jplayer',
	  cssSelectorAncestor : '#jp_container'
	}, 
	  playlist
	, {
	  swfPath : 'js',
	  supplied : 'oga, mp3',
	  wmode : 'window',
	  smoothPlayBar : true,
	  keyEnabled : true
	});
  }
  
  // Scrollbar
  $('.minimized-menu .primary .navbar-nav').scrollbar();
});


// Window Resize
(function() {
  var $ = jQuery;
  var delay = ( function() {
	var timeout = { };
	
	return function( callback, id, time ) {
	  if( id !== null ) {
		time = ( time !== null ) ? time : 100;
		clearTimeout( timeout[ id ] );
		timeout[ id ] = setTimeout( callback, time );
	  }
	};
  })();
  
  function resizeFunctions() {
    if (($('body').width + scrollWidth) > 767) {
	  $('.viewport').remove();
	} else {
	  $('head').append('<meta class="viewport" name="viewport" content="width=device-width, initial-scale=1.0">');
	}
	
	//Functions
	fullWidthBox();
	menu();
	footerStructure();
	tabs();
	modernGallery();
	animations();
	chart();
	isotopFilter();
	zoom();
	paralax();
	loginRegister();
	$('.modal-center:visible').each(centerModal);	
	mistSlider();
	bannerSetCarousel();
	thumblist();
	carousel();
  }

  if(navigator.userAgent.match(/iPad|iPhone|Android/i)) {
	$(window).bind('orientationchange', function() {
	  setTimeout(function() {
		resizeFunctions();
	  }, 150);
	});
  } else {
	$(window).on('resize', function() {
	  delay( function() {		
		resizeFunctions();
	  }, 'resize');
	});
  }
}
());
//Text Slider(Typed Text)
function typedSlider() {
	$(".element").each(function(){
		var $this = $(this);
		$this.typed({
		strings: $this.attr('data-elements').split(','),
		typeSpeed: 100, // typing speed
		backDelay: 3000 // pause before backspacing
		});
	});
}

//Video text slider
function videoTextSlider() {
$(function() {
	"use strict";
	if ( $( ".video-slider-text" ).length !== 0 ) {
		$('.video-slider-text').easyTicker({
			direction: 'up',  
			speed: 'slow',
			interval: 4000,
			height: 'auto',
			visible: 1,
			mousePause: 0,
		});
	}
});
}
function subscribeForm() {
"use strict";
	if ( $( "#subscribe_form" ).length !== 0 ) {
	$('#subscribe_form').bootstrapValidator({
			container: 'tooltip',
			feedbackIcons: {
				valid: 'fa fa-check',
				warning: 'fa fa-user',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: { 
				subscribe_email: {
					validators: {
						notEmpty: {
							message: 'Email is required. Please enter email.'
						},
						emailAddress: {
							message: 'Please enter a correct email address.'
						}
					}
				},	
			}
		})	
			
		.on('success.form.bv', function(e) {
					
			e.preventDefault();
   
			var $form        = $(e.target),
			validator    = $form.data('bootstrapValidator'),
			submitButton = validator.getSubmitButton();
			var form_data = $('#subscribe_form').serialize();
			
			$.ajax({
					type: "POST",
					dataType: 'json',
					url: "php/subscription.php",					
					data: form_data,
					success: function(msg){						
						$('.form-message1').html(msg.data);
						$('.form-message1').show();
						
						submitButton.removeAttr("disabled");
						resetForm($('#subscribe_form'));						
					},
					error: function(msg){}
			 });
			 
			return false;

		});
	}
}

function resetForm($form) {
	$form.find('input:text, input:password, input, input:file, select, textarea').val('');
	$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
	$form.find('.form-control-feedback').css('display', 'none');
}