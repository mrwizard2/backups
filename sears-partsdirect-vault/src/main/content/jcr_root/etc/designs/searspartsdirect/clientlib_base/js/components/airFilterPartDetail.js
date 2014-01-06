/*global $:true, Class:true */
var airFilterPartDetail = Class.extend(function () {
	"use strict";
	var pack4 = {
			number: '',
			div: '',
			pls: '',
			weight: '',
			price: '',
			sub: [false, false, false],
			avail: ''
		},
		pack6 = {
			number: '',
			div: '',
			pls: '',
			weight: '',
			price: '',
			sub: [false, false, false],
			avail: ''
		},
		pack12 = {
			number: '',
			div: '',
			pls: '',
			weight: '',
			price: '',
			sub: [false, false, false],
			avail: ''
		};

	return {
		/**
		 * Initializes guideNavigation class
		 */
		init: function () {
			var self = this;
			$.ajax({
				type: "GET",
				cache: false,
				dataType: "json",
				data: {
					number: 'FA08X14A-12',
					div: '0042',
					pls: '104'
				},
				url: apiPath + 'air-filters/part-details',
				success: function(response) {
					var filter = {
							manufacturer: response[0].manufacturer,
							desc: response[0].partDesc,
							number: response[0].basePartNumber,
							merv: response[0].mervRating,
							image: response[0].imageUrl,
							cat: response[0].productGroupDescription,
							length: response[0].shippingLength,
							width: response[0].shippingWidth,
							height: response[0].shippingHeight
						},
						packs = response[0].availablePacks.length;
					
					for (var i = 0; i < packs; i++) {
						var temp = {
							number: response[0].availablePacks[i].packPartNumber,
							div: response[0].availablePacks[i].packPartDivId,
							pls: response[0].availablePacks[i].packPartPls,
							weight: response[0].availablePacks[i].shippingWeight,
							price: response[0].availablePacks[i].priceForParts,
							sub: [false, false, false],
							avail: response[0].availablePacks[i].availabilityStatus
						};
						var periods = response[0].availablePacks[i].subscriptions.length;
						$.grep(response[0].availablePacks[i].subscriptions, function(e) {
							switch(e.renewalPeriod) {
								case 3:
									temp.sub[0] = true;
									break;
								case 6:
									temp.sub[1] = true;
									break;
								case 12:
									temp.sub[2] = true;
									break;
								default:
									//Error
							}
						});
						switch(response[0].availablePacks[i].packSize) {
							case 4:
								pack4 = temp;
								break;
							case 8:
								pack6 = temp;
								$('#fourPack').removeClass('active');
								$('#sixPack').addClass('active');
								break;
							case 12:
								pack12 = temp;
								$('#fourPack').removeClass('active');
								$('#twelvePack').addClass('active');
								break;
							default:
								//Error
						}
					}
					self.displayFilter(filter);
					self.displayPack(response[0].packSize);
				},
				error: function(response) {
					//console.log('fail');
				}
			});
			this.bindEvents();
		},
		/**
		 * Bind events
		 * @return {void}
		 */
		bindEvents: function () {
			var self = this;
			$('#fourPack').on('click', function (e) {
				$('#sixPack').removeClass('active');
				$('#twelvePack').removeClass('active');
				$(this).addClass('active');
				self.displayPack(4);
			});
			$('#sixPack').on('click', function (e) {
				$('#fourPack').removeClass('active');
				$('#twelvePack').removeClass('active');
				$(this).addClass('active');
				self.displayPack(6);
			});
			$('#twelvePack').on('click', function (e) {
				$('#fourPack').removeClass('active');
				$('#sixPack').removeClass('active');
				$(this).addClass('active');
				self.displayPack(12);
			});
			$('#oneTime').on('click', function (e) {
				$('.packBox.wide').removeClass('active');
				$(this).addClass('active');
				$('#addFilterToCart').attr('data-subper', 0);
			});
			$('#threeMonths').on('click', function (e) {
				$('.packBox.wide').removeClass('active');
				$(this).addClass('active');
				$('#addFilterToCart').attr('data-subper', 3);
			});
			$('#sixMonths').on('click', function (e) {
				$('.packBox.wide').removeClass('active');
				$(this).addClass('active');
				$('#addFilterToCart').attr('data-subper', 6);
			});
			$('#twelveMonths').on('click', function (e) {
				$('.packBox.wide').removeClass('active');
				$(this).addClass('active');
				$('#addFilterToCart').attr('data-subper', 12);
			});
		},
		/**
		 * Display air information (constant between packs)
		 * @return {void}
		 */
		displayFilter: function (filter) {
			$('.partName').html(filter.manufacturer + ' ' + filter.desc + ' Pleated Replacement Air Filter - MERV ' + filter.merv);
			$('#partNumber').html(filter.number);
			//Add code for images
			
			//Check if it lacks packs
			if (pack4.number == '') {
				$('#fourPack').addClass('hidden');
			}
			if (pack6.number == '') {
				$('#sixPack').addClass('hidden');
			}
			if (pack12.number == '') {
				$('#twelvePack').addClass('hidden');
			}
			
			$('#mervRating').html(filter.merv);
			$('#filterCat').html(filter.cat);
			$('#shippingLength').html(filter.length);
			$('#shippingWidth').html(filter.width);
			$('#shippingHeight').html(filter.height);
		},
		/**
		 * Display current pack
		 * @return {void}
		 */
		displayPack: function(e) {
			var current;
			switch(e) {
				case 4:
					current = pack4;
					break;
				case 6:
					current = pack6;
					break;
				case 12:
					current = pack12;
					break;
				default:
					//Error
			}
			$('#packNumber').html(e);
			
			$('#price').html('$' + current.price);
			//Modify message based on availability
			if (current.avail == 'BORD') {
				$('#inStock').html('Back Order');
			} else if (current.avail == 'NLA') {
				$('#inStock').html('Not Available');
			} else {
				$('#inStock').html('In stock');
			}
			//Check for missing subscription periods
			if (!current.sub[0]) {
				$('#threeMonths').addClass('hidden');
			}
			if (!current.sub[1]) {
				$('#sixMonths').addClass('hidden');
			}
			if (!current.sub[2]) {
				$('#twelveMonths').addClass('hidden');
			}
			$('#addFilterToCart').attr('data-partnumber', current.number).attr('data-divid', current.div).attr('data-plsid', current.pls);
			$('#shippingWeight').html(current.weight);
		}
	};
}());