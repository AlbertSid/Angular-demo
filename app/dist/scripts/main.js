angular.module('July', [
	'AppServiceModule',
	'AppDirectModule',
	'RootMoudle',
	'MainBoxModule'
], ['$httpProvider', function($httpProvider) {
	//console.log($httpProvider);
}]).factory('$exceptionHandler', ['$injector', function($injector) {
	return function(exception, cause) {
		var rScope = $injector.get('$rootScope');
		if(rScope.INTERFACE && rScope.INTERFACE.debug) {
			console.info("exception:" + exception);
			console.info("cause:" + cause);
			return;
		};
		console.error(exception);
		console.error(cause);
	};
}]);
//var injector = angular.injector(['AngualrFormDamo']);
//injector.invoke(['gitHubService', function(gitHubService) {
//	//...
//}])
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
var Main = angular.module('MainBoxModule', ['UiRouterCtl']);
Main.controller('homeCtl', ["$scope", "$rootScope", "MathService", "SuperCache",
    function($scope, $rootScope, MathService, SuperCache) {
        $scope.setValue = function(key, value) {
            SuperCache.put(key, value);
        };
        $scope.getValue = function(key) {
            return SuperCache.get(key);
        };
        $scope.remove = function(key) {
            return SuperCache.remove(key);
        };
        $scope.removeAll = function() {
            SuperCache.removeAll();
        };

        $scope.square = function() {
            $scope.result = MathService.square($scope.number);
        }

    }
]);
Main.controller('addCtl', ["$scope", "$rootScope",
    function($scope, $rootScope) {
        $scope.user = {
            nicename: '',
            email: '',
            password: '',
            jokes: '',
            items: [{
                id: 1,
                label: 'aaa'
            }, {
                id: 2,
                label: 'bbb'
            }, {
                id: 3,
                label: 'ccc'
            }],
            jobs: {
                box1: false,
                box2: false
            }
        };
        $scope.required = true;
        $scope.options = $scope.user.items[0];
        $scope.sox = "";
        $scope.submit = function() {
            var map = {
                nicename: $scope.user.nicename,
                email: $scope.user.email,
                password: $scope.user.password,
                jokes: $scope.user.jokes,
                jobs: $scope.user.jobs,
                options: $scope.options,
                sox: $scope.sox
            }
            console.log(map);
        }
    }
]);

Main.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50; 
    // always scroll by 50 extra pixels
}]).controller('userCtl', [
    "$anchorScroll",
    "$location",
    "$scope",
    "$rootScope",
    function($anchorScroll, $location, $scope, $rootScope) {
        $scope.gotoAnchor = function(x) {
            var newHash = 'anchor' + x;
            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash('anchor' + x);
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        };
        //$rootScope.Scope篇

        //$rootScope.$digest()
        //$rootScope.$destroy()

        /* @providers：Object.<string, function()>=
         * @instanceCache：Object.<string, *>=
         */
        //$rootScope.Scope([providers], [instanceCache]) => Object

        /* @isolate：boolean
         * @parent：Scope
         */
        //$rootScope.$new(isolate, parent) => Object

        /* @watchExpressions：Array.<string|Function(scope)>
         * @listener：function(newValues, oldValues, scope)
         * @objectEquality：boolean
         */
        //$rootScope.$watch(watchExpression, listener, [objectEquality]) => function

        /*@watchExpressions：Array.<string|Function(scope)>
         *@listener：function(newValues, oldValues, scope)
         */
        //$rootScope.$watchGroup(watchExpressions, listener) => function 

        /*@obj：string  function(scope)
         *@listener：function(newCollection, oldCollection, scope)
         */
        //$rootScope.$watchCollection(obj, listener) => function 

        //var parent = $rootScope;
        //var child = parent.$new();
        //console.log(parent);
        //console.log(child);
        //console.log($scope);

    }
]);

var RootApp = angular.module('RootMoudle', []);
RootApp.controller('RootCtl', ["$scope", "$rootScope",
    function($scope, $rootScope) {
        
    }
]);

RootApp.controller('LoginCtl', ["$scope", "$rootScope","$location",
    function($scope, $rootScope,$location) {
    	//console.log($location)
        $scope.go = function() {
           $location.path('/home')
        }
    }
]);
RootApp.controller('MainBoxCtl', ["$scope", "$rootScope",
    function($scope, $rootScope) {

    }
]);
var AppDirect = angular.module('AppDirectModule', []);
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
var AppService = angular.module("AppServiceModule", []);

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

AppService.factory('SuperCache', ['$cacheFactory', function($cacheFactory) {
	//这个是把值储存在内存中，一旦应用关闭，就会销毁该值。
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