angular.module('store').filter('price', function () {
	return function (price, ars, symbol) {
		var Price = price.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ".");
		switch (ars) {
			case 'right':
				return Price + " " + symbol;
				break;
			case 'left':
				return symbol + " " + Price;
				break;

		}
	};
})