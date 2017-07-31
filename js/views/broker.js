angular.module('stocks').controller('brokerCtrl', function($scope,brokerService) {
$scope.place = {};

    $scope.search = function() {
        $scope.apiError = false;
        $scope.searchPlace = "stock brokers in " + $scope.searchPlace;
        brokerService.search($scope.searchPlace)
        .then(
            function(res) { // success
                brokerService.addMarker(res);
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }
    brokerService.init();
    
})