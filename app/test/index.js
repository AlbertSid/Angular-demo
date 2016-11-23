//创建myApp应用的Angular模块；
var myApp = angular.module("myApp", ['ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    //这里配置
    $urlRouterProvider.when("", "/login");
    $urlRouterProvider.when("/home", "/home/nav");

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
                var pass = $window.confirm('请确认退出系统');
                if (pass) {
                    console.log("退出登录");
                }
            }
        })
        .state('home.nav', {
            url: '/nav',
            templateUrl: 'test/home/nav.html',
            controller: 'NavController'
        })
        .state('home.test', {
            url: '/test',
            template: '<div> <p>使用html模板，div-test</p> <button ng-click="test">test</button></div>',
            controller: function($scope, $window) {
                $scope.test = function() {
                    $window.alert('你点我了')
                }
            }
        })

});
myApp.controller('HomeController', ['$scope', function($scope) {}]);
myApp.controller('loginCtrl', ['$scope', function($scope) {}]);
myApp.controller('NavController', ['$scope', function($scope) {}]);
