//创建myApp应用的Angular模块；
var myApp = angular.module("myApp", ['ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	//这里配置
	$urlRouterProvider.when("", "/login");
	$urlRouterProvider.when("/home", "/home/ios");

	$stateProvider
		.state('login', { //当然还有一个登陆界面
			url: '/login',
			templateUrl: 'test/login.html',
			controller: 'loginCtrl'
		})
		.state('home', {
			//abstract: true,
			url: '/home',
			templateUrl: 'test/home.html',
			controller: 'HomeController'
		})
		.state('logout', {
			url: '/logout',
			controller: function($scope, $window) {
				var pass = $window.confirm('请确认退出系统');
				if(pass) {
					console.log("退出登录")
						//系统退出的相关操作语言
				}
			}
		})
		.state('home.ios', {
			url: '/ios',
			templateUrl: 'test/home/ios.html',
			controller: 'IosController'
		})
		.state('home.android', {
			url: '/android',
			templateUrl: 'test/home/android.html',
			controller: 'AndroidController'
		})
		.state('home.java', {
			url: '/java',
			templateUrl: 'test/home/java.html',
			controller: 'JavaController'
		})
		.state('home.test', {
			url: '/test',
			template: '<h1>当然了，自己在这里写一些html语句也是可以的</h1>'
		})

});
myApp.controller('HomeController', ['$scope', function($scope) {
	//就写这一个控制器，剩下的内容可以自己发挥了
}]);
myApp.controller('loginCtrl', ['$scope', function($scope) {
	//就写这一个控制器，剩下的内容可以自己发挥了
}]);

myApp.controller('IosController', ['$scope', function($scope) {
	//就写这一个控制器，剩下的内容可以自己发挥了
}]);
myApp.controller('AndroidController', ['$scope', function($scope) {
	//就写这一个控制器，剩下的内容可以自己发挥了
}]);
myApp.controller('JavaController', ['$scope', function($scope) {
	//就写这一个控制器，剩下的内容可以自己发挥了
}]);