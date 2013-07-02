/*global window:true, $:true, Class:true, mainSitePath:true */
var searchPanel = Class.extend(function () {
	"use strict";

	return {
		/**
		 * @singleton searchPanel
		 * Singleton class for the searchPanel component
		 *
		 * init: On page load events to fire
		 */
		init: function () {
			// Initialize events
			this.findItems();
			this.bindEvents();
			console.log('searchPanel initialized');
		},
		/**
		 * Finds dropdown items
		 * @return {void}
		 */
		findItems: function () {
			var self = this;

			// Bind an event to each drop-down selection
			$('#searchContent .dropdown-menu li a').bind('click', function (e) {
				e.preventDefault();
				self.selectType($(this));
			});
		},
		/**
		 * Handles type selection
		 * @param {object} el jQuery element
		 * @return {void}
		 */
		selectType: function (el) {
			var self = this,
				value = $('#searchBarField').attr('value'),
				action = mainSitePath + '/partsdirect/' + el.data('postpath') + '/',
				label = el.data('label'),
				modelNumber = '',
				partNumber = '';

			// Update selection status
			$('#searchContent .dropdown-menu li').removeClass('selected');
			el.parent().addClass('selected');
			// Set the drop-down label
			$('#searchTypeLabel').text(label);
			// Make sure the value isn't the help text
			if (value === $('#searchBarField').data('inputhelp') || value === $('#searchBarField').data('inputhelpmobile')) {
				value = '';
			}
			// Update hidden fields
			if (el.data('pathtaken') === 'modelSearch') {
				modelNumber = value;
			} else {
				partNumber = value;
			}
			$('#shdMod').attr('value', modelNumber);
			$('#shdPart').attr('value', partNumber);
			$('#pathTaken').attr('value', el.data('pathtaken'));
			// Update form action
			$('#searchBarForm').attr('action', action + encodeURIComponent(value));
			// Activate or deactivate the button
			if (value === '') {
				$('#searchModelsParts').attr('disabled', true);
			} else {
				$('#searchModelsParts').attr('disabled', false);
			}
		},
		/**
		 * Perform initial event binding
		 * @return {void}
		 */
		bindEvents: function () {
			var self = this,
				selectStatement = '#searchContent .dropdown-menu li.selected a';

			// Bind events on search field
			$('#searchBarField').bind('blur', function () {
				if ($(selectStatement).length > 0) {
					self.selectType($(selectStatement));
				}
			})
			.bind('change', function () {
				if ($(selectStatement).length > 0) {
					self.selectType($(selectStatement));
				}
			})
			.bind('keypress', function (e) {
				var key = -1;

				// Determine which key was pressed
				if (e.keyCode) {
					key = e.keyCode;
				} else if (e.which) {
					key = e.which;
				}

				// If the user hit enter, check if there's a type
				if (key === 13) {
					if ($(selectStatement).length > 0) {
						self.selectType($(selectStatement));
						return true;
					} else {
						$('#searchContent .dropdown-menu').dropdown('toggle');
						return false;
					}
				} else {
					return true;
				}
			});

			// Determine if Search button is enabled
			if ($(selectStatement).length > 0) {
				$('#searchModelsParts').attr('disabled', true);
			} else {
				$('#searchModelsParts').attr('disabled', false);
			}
		}
	}
}());