var UiRouter = angular.module('UiRouterCtl', ['ui.router']);
UiRouter.config(['$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		
		$urlRouterProvider.when("", "/login");
		$urlRouterProvider.when("/home", "/home/add");
		$urlRouterProvider.when("/home/main", "/home/main/test1");
		$urlRouterProvider.when("/home/main/pageTab", "/home/main/pageTab/page1");
		var routerState = [{
			name: 'login',
			url: '/login',
			templateUrl: 'view/login.html'
		}, {
			name: 'home',
			url: '/home',
			templateUrl: 'view/home.html'
		}, {
			name: 'home.add',
			url: '/add',
			templateUrl: 'view/home/add.html'
		}, {
			name: 'home.user',
			url: '/user',
			templateUrl: 'view/home/user.html'
		}, {
			name: 'home.main',
			url: '/main',
			templateUrl: 'view/home/main.html'
		}, {
			name: 'home.main.test1',
			url: '/test1',
			templateUrl: 'view/home/main/test1.html'
		}, {
			name: 'home.main.test2',
			url: '/test2',
			templateUrl: 'view/home/main/test2.html'
		}, {
			name: 'home.main.pageTab',
			url: '/pageTab',
			templateUrl: 'view/home/main/pageTab.html'
		}, {
			name: 'home.main.pageTab.page1',
			url: '/page1',
			templateUrl: 'view/home/main/page1.html'
		}, {
			name: 'home.main.pageTab.page2',
			url: '/page2',
			templateUrl: 'view/home/main/page2.html'
		}];
		routerState.forEach(function(state) {
			$stateProvider.state(state);
		});
		//$urlRouterProvider.otherwise('/main/home');
	}
]);