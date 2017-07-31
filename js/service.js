angular.module('stocks').service('service', function($http) {
    this.stockData = function() { //Will remove when controller is updated to send data to getStock via kitkat param
        return $http({
         method: 'GET',
         url: 'https://www.alphavantage.co/query?function=SECTOR&apikey=JLWNCZKBHO0KKNOI'
        }).then(function successCallback(response) {
            this.index = response.data;
            return this.index

        }, function errorCallback(response) {
            return "Could not retrive data"
        });
    }
    this.getStock = function(kitkat) {
        return $http({
         method: 'GET',
         url: kitkat
        }).then(function successCallback(response) {
            this.getData= response.data;
            return this.getData

        }, function errorCallback(response) {
            return "Could not retrive data"
        });
    }
    
})