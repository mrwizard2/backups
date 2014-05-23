/*global window:true, $:true, Class:true, mainSitePath:true */
var addToCart = Class.extend(function () {
	"use strict";

	return {
		/**
		 * @class addToCart
		 * Creates an instance of an add to cart button
		 * Uses AJAX to add item then updates the cart drop down
		 *
		 * init: On page load events to fire
		 * @param {object} el jQuery element to attach to
		 * @param {object} qf jQuery element for corresponding quantity field
		 */
		init: function (el, qf) {
			// Properties
			this.el = el;
			this.offset = el.offset();
			this.animElem = $("#addToCartAnimation");
            this.animElemOriginalTop = this.animElem.css("top");
            this.isAnimating = false;
			this.quantityField = qf;
			this.partNumber = '';
			this.divId = '';
			this.plsId = '';
			this.subPer = -1;
			this.component = '';
			// Elements
			this.cartItems = {
				dropdownButton: null,
				header: null,
				checkOut: null,
				totals: null,
				view: null,
				count: null,
				countBadge: null,
				statusMessage: null,
			}
			this.cartEmpty = null;
			// Setup
			this.bindEvents();
		},
		/**
		 * Set instance properties from element attributes
		 * @return {void}
		 */
		setProperties: function () {
			var self = this;

			// Retrieve properties
			self.partNumber = self.el.attr('data-partnumber');
			self.divId = self.el.attr('data-divid');
			self.plsId = self.el.attr('data-plsid');
			if (self.el.attr('data-subper') != undefined) {
				self.subPer = self.el.attr('data-subper');
			}
			self.location = self.el.attr('data-location');
			self.component = self.el.attr('data-component');
			// Retrieve elements
			self.cartItems.dropdownButton = $('#cartShop > div > a');
			self.cartItems.header = $('#cartShop .cartShopHeader_js');
			self.cartItems.checkOut = $('#cartShop .cartShopCheckOut_js');
			self.cartItems.totals = $('#cartShop .cartShopTotals_js');
			self.cartItems.view = $('#cartShop .cartShopView_js');
			self.cartItems.count = $('.cartShopCount_js', self.cartItems.totals);
			self.cartItems.countBadge = $('#cartShop .count-badge');
			self.cartEmpty = $('#cartShop .cartShopEmpty_js');
			self.cartItems.statusMessage = $('#cartShop .cartShopStatusMessage_js');
		},
		/**
		 * Set instance Omniture for the click event
		 * @return {void}
		 */
		setOmniture: function () {
			var self = this,
				prodVar = ';' + self.divId + self.plsId + self.partNumber;

			// Set CQ values
			if (self.subPer > -1) {
				if (self.subPer == 0) {
					prodVar += ';;;eVar=57="One-Time Purchase"';
				} else {
					prodVar += ';;;eVar=57="Every ' + self.subPer + ' Months"';
				}
			}
			SPDUtils.trackEvent({event: 'atcEvent', values: {atcLocation: self.location, atcProduct: prodVar}, componentPath: self.component}, 'Add_To_Cart_#templateName');
		},
		/**
		 * Add item to cart
		 * @return {void}
		 */
		addItem: function () {
			var self = this,
				su = window.SPDUtils,
				quantity = su.validNumber(self.quantityField.attr('value'), 1),
				addAddress = mainSitePath + '/partsdirect/addtocart.pd',
				params = {
					partno: self.partNumber,
					divid: self.divId,
					plsid: self.plsId,
					quantity: quantity
				};

			// Ensure all parameters are valid
			if (self.partNumber !== '' && self.divId !== '' && self.plsId !== '') {
				// Add user param if available
				if (su.validString(registeredUserId) !== '') {
					params.userid = registeredUserId;
				}
				// Add cart ID param if available
				if (NS('shc.pd.cookies').cid !== '') {
					params.cid = NS('shc.pd.cookies').cid;
				}
				// Add subscription period if part is to be subscribed
				if (self.subPer > 0) {
					params.renewalPeriod = self.subPer;
				}

				// Make an AJAX call
				$.ajax({
					type: 'GET',
					url: addAddress,
					async: false,
					contentType: 'application/json',
					dataType: 'JSON',
					data: params
				})
				.success(function (data) {
					self.handleResponse(data);
				})
				.fail(function (e) {
					// Handle error
				});
			}
            // NOTE: Next line for testing ONLY
            // comment out for QA/PROD
            //self.showAddedMessage();
		},
		/**
		 * Display a message to the user to show that their item was added to the cart
		 * @return {void}
		 */
		showAddedMessage: function() {
			var self = this;

            if (self.isAnimating) {
                return;
            } else {
                self.isAnimating = true;
            }

            self.animElem.css('display', 'block');
            self.animElem.animate({
                   opacity: 1,
                   top: "-=200"},
                1500
            );
            setTimeout(function () {self.hideAddedMessage()}, 3000);
		},

        hideAddedMessage: function() {
            var self = this;

            self.animElem.animate({
                    opacity: 0,
                    top: "-=200"},
                1500
            );
            setTimeout(function () {self.hideAddedMessageForIE8()}, 1510);
        },

        hideAddedMessageForIE8: function() {
            var self = this;

            self.animElem.css('display', 'none');
            self.animElem.css('top', self.animElemOriginalTop);
            self.isAnimating = false;
        },
		/**
		 * Process AJAX response
		 * @param {object} data AJAX response
		 * @return {void}
		 */
		handleResponse: function (data) {
			var self = this,
				su = window.SPDUtils,
				i = 0,
				itemCount = 0,
				insert = false,
				message = '',
				statusMessages = [
					'Showing last added item',
					'Showing last 2 added items',
					'Showing last 3 added items'
				];

			// Set cartID cookie
			NS('shc.pd.cookies').cid = data.cartId;

			// Handle items
			if (data.cartParts.length > 0) {
				// Show message to user
				self.showAddedMessage();

				// update cart status message
				message = statusMessages[data.cartParts.length-1] ? statusMessages[data.cartParts.length-1] : statusMessages[statusMessages.length-1];
				self.cartItems.statusMessage.text(message);

				// set cart dropdown into hover state
				self.cartItems.dropdownButton.addClass('hover');

				// Set visibility of elements
				self.cartItems.header.removeClass('inactive');
				self.cartItems.checkOut.removeClass('inactive');
				self.cartItems.totals.removeClass('inactive');
				self.cartItems.view.removeClass('inactive');
				self.cartEmpty.addClass('inactive');
				self.cartItems.statusMessage.removeClass('inactive');

				// Remove current items - ensures quantity changes are reflected
				$('#cartShop .cart-item').remove();

				// Render new items
				for (i = 0; i < data.cartParts.length; i = i + 1) {
					// insert into html, only last 3 items
					insert = (data.cartParts.length - i <= 3) ? true : false;
					// accumulate total items in cart count, even if not in html
					itemCount += self.renderItem(data.cartParts[i], insert);
				}

				// Set total item count
				if (itemCount > 99) {
					itemCount = '99+';
				}
				self.cartItems.count.text(itemCount);
				self.cartItems.countBadge.text(itemCount);
			} else {
				// Set visibility of elements
				self.cartItems.header.addClass('inactive');
				self.cartItems.checkOut.addClass('inactive');
				self.cartItems.totals.addClass('inactive');
				self.cartItems.view.addClass('inactive');
				self.cartEmpty.removeClass('inactive');
				self.cartItems.statusMessage.addClass('inactive');
				self.cartItems.dropdownButton.removeClass('hover');

				// Set total item count
				self.cartItems.count.text('0');
				self.cartItems.countBadge.text('0');
				self.cartItems.statusMessage.text('');
			}
		},
		/**
		 * Render a shopping cart item and insert it in the drop down
		 * @param {object} item Returned data item
		 * @return {number} Quantity of current item added
		 */
		renderItem: function (item, insert) {
			var self = this,
				su = window.SPDUtils,
				quantity = 0,
				li = new cartItemTemplate(item);

			// Retrieve quantity
			quantity = item.quantity;
			// Insert element
			if (insert){
				self.cartItems.totals.before(li);
			}

			return quantity;
		},
		/**
		 * Bind events to button
		 * @return {void}
		 */
		bindEvents: function () {
			var self = this;

			self.el.bind('click', function (e) {
				e.preventDefault();
				//Properties are set here in case data on the Add to Cart button is updated with javascript
                self.setProperties();
                self.setOmniture();
				self.addItem();
			});
		}
	}
}());