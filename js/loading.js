angular.module('stocks').directive('katLoading', ['$http', function ($http) { //Pulled bits from stackoverflow
    return {
        restrict: 'A', //Attribute 
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0; //Checks to see if there are any requests.
            };
            scope.$watch(scope.isLoading, function (v) { 
                        if (v) {
                            elm.css('display', 'block'); //Display loading icon
                        } else {
                            elm.css('display', 'none'); //Turn off loading icon
                        }
                    });
        }
    };
}]);