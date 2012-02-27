// some magic on the form to emphasize the possible card type
(function( $ ) {
	$.fn.creditCardTypeDetector = function( options ) {
		var settings = $.extend( {
				'credit_card_logos_id': '.card_logos'
			}, options),
			
			// the object that contains the logos
			logos_obj = $(settings.credit_card_logos_id),
			
			// the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
			// Visa
			visa_regex = new RegExp('^4[0-9]{0,15}$'),

			// MasterCard
			mastercard_regex = new RegExp('^5$|^5[1-5][0-9]{0,14}$'),

			// American Express
			amex_regex = new RegExp('^3$|^3[47][0-9]{0,13}$'),

			// Diners Club
			diners_regex = new RegExp('^3$|^3[068]$|^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$'),

			//Discover
			discover_regex = new RegExp('^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$'),

			//JCB
			jcb_regex = new RegExp('^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$');
						
		return this.each(function(){
			// as the user types
			$(this).keyup(function(){
				var cur_val = $(this).val();

				// get rid of spaces and dashes before using the regular expression
				cur_val = cur_val.replace(/ /g,'').replace(/-/g,'');

				// checks per each, as their could be multiple hits
				if ( cur_val.match(visa_regex) ) {
					$(logos_obj).addClass('is_visa');
				} else {
					$(logos_obj).removeClass('is_visa');
				}

				if ( cur_val.match(mastercard_regex) ) {
					$(logos_obj).addClass('is_mastercard');
				} else {
					$(logos_obj).removeClass('is_mastercard');
				}

				if ( cur_val.match(amex_regex) ) {
					$(logos_obj).addClass('is_amex');
				} else {
					$(logos_obj).removeClass('is_amex');
				}

				if ( cur_val.match(diners_regex) ) {
					$(logos_obj).addClass('is_diners');
				} else {
					$(logos_obj).removeClass('is_diners');
				}

				if ( cur_val.match(discover_regex) ) {
					$(logos_obj).addClass('is_discover');
				} else {
					$(logos_obj).removeClass('is_discover');
				}

				if ( cur_val.match(jcb_regex) ) {
					$(logos_obj).addClass('is_jcb');
				} else {
					$(logos_obj).removeClass('is_jcb');
				}

				// if nothing is a hit we add a class to fade them all out
				if ( cur_val != '' && !cur_val.match(visa_regex) && !cur_val.match(mastercard_regex)
				 && !cur_val.match(amex_regex) && !cur_val.match(diners_regex) 
				&& !cur_val.match(discover_regex) && !cur_val.match(jcb_regex)) {
					$(logos_obj).addClass('is_nothing');
				} else {
					$(logos_obj).removeClass('is_nothing');
				}
			});
		});
	};
})( jQuery );