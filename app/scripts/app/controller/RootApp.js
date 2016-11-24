var RootApp = angular.module('RootMoudle', []);
RootApp.controller('RootCtl', ["$scope", "$rootScope",
    function($scope, $rootScope) {

    }
]);

RootApp.controller('LoginCtl', ["$scope", "$rootScope", "$location",
    function($scope, $rootScope, $location) {
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
