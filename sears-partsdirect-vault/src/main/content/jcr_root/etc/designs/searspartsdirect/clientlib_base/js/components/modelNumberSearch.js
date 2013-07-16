/*global window:true, $:true, Class:true */
var modelNumberSearch = Class.extend(function () {
	"use strict";

	return {
		/**
		 * Initializes modelNumberSearch class
		 * @param {object} el Target element
		 */
		init: function (el) {
			// Parameters
			this.el = $(el);
			// Properties
			this.inputField = null;
			this.inputHelp = '';
			this.inputHelpMobile = '';
			this.messageArea = null;
			this.button = null;
			// Find elements
			this.setProperties();
			// Bind events
			this.bindEvents();
		},
		/**
		 * Finds related elements
		 * @return {void}
		 */
		setProperties: function () {
			var self = this,
				su = window.SPDUtils;

			// Input field
			self.inputField = $('input[type="text"]', self.el);
			self.inputHelp = self.inputField.data('inputhelp');
			self.inputHelpMobile = self.inputField.data('inputhelpmobile');
			// Message area
			self.messageArea = $('.display-message', self.el);
			// Button
			self.button = $('button', self.el);
		},
		/**
		 * Checks input value and starts AJAX call
		 * @return {void}
		 */
		search: function () {
			var self = this,
				su = window.SPDUtils,
				searchAddress = apiPath + 'modelSearch/modelSearch',
				searchTerm = su.validString(self.inputField.attr('value'));

			// Check the input value
			if (searchTerm !== '' && searchTerm !== self.inputHelp && searchTerm !== self.inputHelpMobile) {
				// Make an AJAX call
				$.ajax({
					type: 'GET',
					url: searchAddress,
					async: false,
					contentType: 'application/json',
					dataType: 'JSON',
					data: {
						modelNumber: searchTerm
					}
				})
				.success(function (data) {
					self.searchResponse(data, searchTerm);
				})
				.fail(function () {
					self.displayMessage('We were unable to complete your search.', 'error');
				});
			} else {
				// Display an error message
				self.displayMessage('Please provide a model number.', 'error');
			}
		},
		/**
		 * Handles search results
		 * @param {object} resp Response from AJAX call
		 * @param {string} searchTerm Term entered by the user
		 * @return {void}
		 */
		searchResponse: function (data, searchTerm) {
			var self = this;

			// Did the AJAX call return valid data?
			if (data.count) {
				// Redirect if there is one item
				// Display a message
				switch (data.count) {
					case 0:
						self.displayMessage('We\'re sorry, no results were found. Please check that you entered your model number correctly and try again.', 'error');
						break;
					case 1:
						self.redirect(data.models[0]);
						break;
					default:
						self.displayMessage('We found multiple results for this search. <a href="' + mainSitePath + '/partsdirect/part-model/' + searchTerm + '" target="_blank">View search results</a>', 'success');
						break;
				}
			} else {
				self.displayMessage('We\'re sorry, no results were found. Please check that you entered your model number correctly and try again.', 'error');
			}
		},
		/**
		 * Handles a redirect to the single result servlet
		 * @param {object} resp Response from AJAX call
		 * @return {void}
		 */
		redirect: function (data) {
			var self = this,
				su = window.SPDUtils,
				query = '',
				brandName = '',
				categoryName = '',
				modelNumber = '',
				modelUrl = '';

			// Check the data object
			if (su.validString(data.brandName) !== '') {
				brandName = encodeURI(su.validString(data.brandName));
				categoryName = encodeURI(su.validString(data.categoryName));
				modelNumber = encodeURI(su.validString(data.modelNumber));
				modelUrl = encodeURI(mainSitePath + '/partsdirect' + su.validString(data.modelURL));

				query += '?brand=' + brandName;
				query += '&category=' + categoryName;
				query += '&model=' + modelNumber;
				query += '&link=' + modelUrl;

				document.location.href = su.getLocationDetails().fullAddress + modelSearchServletPath + query;
			} else {
				self.displayMessage('There was a problem redirecting you.', 'error');
			}
		},
		/**
		 * Displays a message to the user
		 * @param {string} msg Message HTML
		 * @param {type} type Class to use
		 * @return {void}
		 */
		displayMessage: function (msg, type) {
			var self = this;

			// Set the message
			self.messageArea.html(msg);
			// Set the classes; faster than using toggles
			self.messageArea.attr('class', 'display-message ' + type);
		},
		/**
		 * Bind form events
		 * @return {void}
		 */
		bindEvents: function () {
			var self = this,
				key = -1;

			// Bind input events
			self.inputField.bind('keyup', function () {
				return false;
			})
			.bind('keyup', function (e) {
				// Determine which key was pressed
				if (e.keyCode) {
					key = e.keyCode;
				} else if (e.which) {
					key = e.which;
				}

				// Search if the user hit enter
				if (key === 13) {
					self.search();
				}
			});
			// Bind button
			self.button.bind('click', function (e) {
				e.preventDefault();
				self.search();
			});
		}
	};
}());