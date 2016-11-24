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
        if (rScope.INTERFACE && rScope.INTERFACE.debug) {
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
