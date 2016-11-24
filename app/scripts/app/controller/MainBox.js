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
