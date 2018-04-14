angular.module('store').filter('timeAgo', function($filter){
	return function(time){
		var perMinute=60*1000;
		var perHour=perMinute*60;
		var perDay=perHour*24;
		var perMonth=perDay*30;
		var perYear=perMonth*12;
		var now = new Date().getTime();
		var time_ago = now-time;
		if(time_ago<0){
			return $filter('date')(time, date_format);
		}
		else if (time_ago<perMinute){
			return Math.round(time_ago/1000) + ' seconds ago';
		}
		else if(time_ago<perHour){
			return Math.round(time_ago/perMinute) + ' minutes ago';
		}
		else if(time_ago<perDay){
			return Math.round(time_ago/perHour) + ' hours ago';
		}
		else if(time_ago<perMonth){
			return Math.round(time_ago/perDay) + ' days ago';
		}
		else if(time_ago<perYear){
			return Math.round(time_ago/perMonth) + ' months ago';
		}
		else{
			return Math.round(time_ago/perYear) + ' years ago';
		}
	}
})