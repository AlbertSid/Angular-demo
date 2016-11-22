var AppService = angular.module("AppService", []);

AppService.factory('MathFactory', function() {
	var factory = {
		square: function(a, b) {
			return a * b
		},
		add: function(a, b) {
			return a + b
		}
	};
	return factory;
});

AppService.factory('superCache', ['$cacheFactory', function($cacheFactory) {
	// $cacheFactory('super-cache')这个是把值储存在内存中，一旦应用关闭，就会销毁该值。
	return $cacheFactory('super-cache');
}]);

AppService.service('MathService', ['MathFactory', function(MathFactory) {
	this.square = function(a) {
		return MathFactory.square(a, a);
	}
	this.add = function(a) {
		return MathFactory.add(a, a);
	}
}]);