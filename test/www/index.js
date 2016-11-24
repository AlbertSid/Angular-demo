
var myApp = angular.module("myApp", ['ui.router', 'ui.bootstrap']);
myApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',function($stateProvider, $locationProvider, $urlRouterProvider) {
	$urlRouterProvider.when("", "/login");
	$urlRouterProvider.when("/home", "/home/index");
	$stateProvider
		.state('login', { 
			url: '/login',
			templateUrl: 'test/login.html',
			controller: 'loginCtrl'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'test/home.html',
			controller: 'HomeController'
		})
		.state('logout', {
			url: '/logout',
			controller: function($scope, $window) {
				console.log('logout')
			}
		})
		.state('home.index', {
			url: '/index',
			templateUrl: 'test/view/index.html',
			controller: 'doController'
		})
		.state('home.test', {
			url: '/test',
			template: '<div>使用html模板</div>'
		})

}]);
myApp.controller('HomeController', ['$scope', function($scope) {}]);
myApp.controller('loginCtrl', ['$scope', function($scope) {}]);
myApp.controller('doController', ['$scope', function($scope) {}]);