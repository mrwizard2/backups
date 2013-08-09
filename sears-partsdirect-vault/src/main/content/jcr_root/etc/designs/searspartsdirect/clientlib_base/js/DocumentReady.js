/*global $:true, window:true, document:true, Class:true, searchPanel:true, revealPanel:true, responsiveImage: true, video:true, guideNavigation:true, regula:true */
(function (window) {
	"use strict";
	/**
	 * Global functionality instantiation
	 */
	$(document).ready(function () {
		/**
		 * Cross-Domain Window Message Handling
		 */
		var newMessageHandler = new messageHandler();
		$(window).bind('message', function (e) {
			e.preventDefault();
			newMessageHandler.handleMessage(e.originalEvent);
		});
		/* Fix Twitter Bootstrap Dropdown Issue */
		$('.dropdown-menu li').click(function(e) {
			if (e.cancelBubble) {
				e.cancelBubble = true;
			} else {
				e.stopPropagation();
			}
		});
        /**
		 * model section
		 */
		var modelsection = new modelsectionHeader();
        /**
		 * Comment Section
		 */
		var commentcheck = new commentCheck();
		/**
		 * Search Panel
		 */
		var mainSearchPanel = new searchPanel();
		/**
		 * modelNumberSearch class setup
		 */
		$('.modelNumberSearch').each(function () {
			var newModelNumberSearch = new modelNumberSearch($(this));
		});
		/**
		 * revealPanel class setup
		 */
		$('[data-toggle="reveal"]').each(function () {
			var newRevealPanel = new revealPanel($(this));
		});
		/**
		 * Login Navigation
		 */
		$('.trigger').bind('click', function () {
			$('body').toggleClass('loginNav-open');
		});
		$('#loginNavGetHelp').bind('click', function () {
			if (window.SPDUtils.isMobileBreakpoint() === true) {
				$('body').toggleClass('loginNav-open');
			}
		});
		/**
		 * Cart Navigation
		 */
		var newCartNav = new cartNav();
		$('#cartShop [data-toggle]').bind('click', function () {
			$('body').toggleClass('cartNav-open');
		});
		/**
		 * Input help text listeners
		 */
		$('[data-inputhelp]').each(function () {
			// Perform initial check
			window.SPDUtils.checkInput($(this));
			// Bind events
			$(this).bind('blur', function () {
				window.SPDUtils.checkInput($(this));
			})
			.bind('focus', function () {
				window.SPDUtils.checkInput($(this), true);
			})
			.bind('change', function () {
				window.SPDUtils.checkInput($(this));
			});
		});
		/**
		 * Link help text listeners
		 */
		$('[data-texthelp]').each(function () {
			// Perform initial check
			window.SPDUtils.checkLink($(this));
		});
		/**
		 * responsiveImage component setup
		 */
		$('.responsiveImage div[data-desktopimage]').each(function () {
			var newResponsiveImage = new responsiveImage($(this));
		});
		/**
		 * responsiveDropdown class setup
		 */
		$('[data-toggle="responsive-dropdown"]').each(function () {
			var newResponsiveDropdown = new responsiveDropdown($(this));
		});
		/**
		 * video component setup
		 */
		$('.video div[data-youtubeid]').each(function () {
			var newVideo = new video($(this));
		});
        /**
		 * addToCart class component setup
		 */
		$('.addToCart_js').each(function () {
			var newAddToCart = new addToCart($(this), $('.addToCartQuantity_js', $(this).parent().parent()));
		});
        /**
		 * guideNavigation component setup
		 */
		$('.guideNavigation').each(function() {
			var newGuideNavigation = new guideNavigation($(this));
		});
        /**
         * collapse101 component setup
         * NOTE: collapse101 is based on Twitter Bootstrap's
         * collapse component with modifications to make it
         * behave responsively the way Sears UX wanted.
         */
        $('[data-toggle="collapse101"]').each(function () {
            var newCollapse101 = new Collapse101($(this));
        });
        /**
         * category101 component setup
         */
        $('.category101').each(function() {
            var newCategory101 = new category101($(this));
        });
        // findThisPart component setup
        $('.findThisPart').each(function() {
            var newFindThisPart = new findThisPart($(this));
        });
        // commonParts component setup
        $('.commonParts').each(function() {
            var newCommonParts = new commonParts($(this));
        });

        // recommendedParts component setup
        $('.recommendedParts').each(function() {
            var newrecommendedParts = new recommendedParts($(this));
        });

		// desktop carousel initialization
		$('.desktop-carousel').each(function () {
			var carouselElement = $(this);

			shc.pd.base.render.WidgetBreakpointRegistry.add(new shc.pd.base.render.BreakpointConfig({
				min: 1024,
				max: 100000,
				obj: new shc.pd.base.widgets.DesktopCarousel(carouselElement)
			}));
		});
		// touch carousel initialization
		$('.touch-carousel').each(function () {
			var carouselElement = $(this);

			shc.pd.base.render.WidgetBreakpointRegistry.add(new shc.pd.base.render.BreakpointConfig({
				min: 1,
				max: 1023,
				obj: new shc.pd.base.widgets.TouchCarousel(carouselElement)
			}));
		});
		/*
		 * Responsive table initializer
		 */
		shc.pd.base.widgets.ResponsiveTable.init($('table.responsive-table'));
		/*
		 * Search panel finder widget
		 */
		shc.pd.base.widgets.SearchPanelFinder.init($('.search-panel-finder'));
		/*
		 * SVG icon compatibility fix for legacy browsers
		 */
		if ($('html').hasClass('no-background-size')) {
			$('[class^="svg-icon"]').each(function () {
				var newSVGIcon = new svgIcon($(this));
			});
		}
	});
}(window));