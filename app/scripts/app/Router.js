var UiRouter = angular.module('UiRouterCtl', ['ui.router']);
UiRouter.config(['$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		var routerState = [{
			name: 'home',
			url: '/main/home',
			templateUrl: 'View/main/home.html'
		}, {
			name: 'add',
			url: '/main/add',
			templateUrl: 'View/main/add.html'
		}, {
			name: 'user',
			url: '/main/user',
			templateUrl: 'View/main/user.html'
		}];
		$urlRouterProvider.otherwise('/main/home');
		routerState.forEach(function(state) {
			$stateProvider.state(state);
		});
		//		console.log($stateProvider);
		//		console.log($urlRouterProvider);
	}
]);