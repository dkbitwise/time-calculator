/**
 * Calculator js.
 */
(function ($) {
	'use strict'
	jQuery(document).ready(function () {
		let hour1, minute1, hour2, minute2, result_hour, result_minute;

		jQuery('.dk-button').on('click',function () {
			hour1 = parseInt(jQuery('#hour1').val());
			minute1 = parseInt(jQuery('#minute1').val());
			hour2 = parseInt(jQuery('#hour2').val());
			minute2 = parseInt(jQuery('#minute2').val());

			let action = jQuery(this).val();
			console.log(action);
			if('sum' === action){
				let valid = validateMinutes(minute1,minute1);
				console.log(valid);
				if(!valid){
					return false;
				}
				let addSums = () => {
					let minute_sum = parseInt(minute1)+parseInt(minute2);
					console.log(minute_sum);
					let hour_carry = (minute_sum > 59) ? parseInt(minute_sum/60):0;

					result_minute= (minute_sum > 59) ? parseInt(minute_sum%60) : minute_sum;
					result_hour = parseInt(hour1)+parseInt(hour2)+parseInt(hour_carry);

					return result_hour+' Hours : '+result_minute+' Minutes';
				};
				jQuery('#dk-result').html(addSums());
			}else if('diff'===action){
				validateMinutes(minute1,minute1);
				let valid = validateMinutes(minute1,minute1);
				if(!valid){
					return false;
				}
				let diffTime = () => {
					result_minute = (minute1 >= minute2) ? parseInt(minute1)-parseInt(minute2) : parseInt(minute1+60)-parseInt(minute2);
					hour1 = (minute1 >= minute2) ? hour1 : parseInt(hour1)-1;

					result_hour = parseInt(hour1)-parseInt(hour2);

					return result_hour+' Hours : '+result_minute+' Minutes';
				};
				jQuery('#dk-result').html(diffTime());
			}else if('default-shift' === action){
				jQuery('#hour1').val(47);
				jQuery('#minute1').val(30);
			}else if('default-task' === action){
				jQuery('#hour1').val(40);
				jQuery('#minute1').val(0);
			}else if('clear-time1' === action){
				jQuery('#hour1').val('');
				jQuery('#minute1').val('');
			}else if('clear-time2' === action){
				jQuery('#hour2').val('');
				jQuery('#minute2').val('');
			}else if('set-in-time1' === action){
				jQuery('#hour1').val(result_hour);
				jQuery('#minute1').val(result_minute);
			}else if('set-in-time2' === action){
				jQuery('#hour2').val(result_hour);
				jQuery('#minute2').val(result_minute);
			}
		});
		let validateMinutes = (mintue1,minute2) => {
			if(minute1>59||minute2>59){
				jQuery('#dk-result').html('Invalid minute values');
				return false;
			}
			return true;
		}
	});
})(jQuery);

