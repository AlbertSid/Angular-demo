var  AppDirect = angular.module('AppDirect', []);
//console.log(AppDirect);
AppDirect.directive('onFinishRender', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {
			if(scope.$last === true) {
				$timeout(function() {
					scope.$emit('onFinishRender');
				});
			}
		}
	};
}]);
AppDirect.directive('textfrom', [
	'$compile',
	'$timeout',
	'$rootScope',
	function($compile, $timeout, $rootScope) {
		var map = {
			scope: {},
			replace: true,
			restrict: 'AECM',
			template: '<div class="nav"></div>',
			link: function(scope, element, attr) {
				var template = '<span>hello world</span>';
				element.html(template);
				$compile(element.contents())(scope);
			}
		};
		return map;
	}
]);