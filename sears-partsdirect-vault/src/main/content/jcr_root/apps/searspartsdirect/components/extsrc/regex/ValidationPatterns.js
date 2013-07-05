CQ.Ext.namespace('Shc.components.extsrc.regex');

Shc.components.extsrc.regex.ValidationPattterns = (function () {
	'use strict';
	
	return {
		/**
		 * @type {RegExp}
		 */
		youtube: /https?:\/\/(?:www\.)?youtube.com\/watch\?(?=.*v=\w+)(?:\S+)?$/
	};
}());