angular.module('stocks').controller('stockReal', function($scope,service) {
      
    $scope.getStock = function(searchData,time,range) {
        var kitkat = ""
        $scope.ranges = range;
        if(!$scope.ranges) {
            $scope.ranges=12;
        }
        $scope.times = "";
        if(!time || time == 1) {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchData+'&interval=1min&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Time Series (1min)';
        }
        if(time == 5) {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchData+'&interval=5min&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Time Series (5min)';
        }
        if(time == 15) {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchData+'&interval=15min&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Time Series (15min)';
        }
        if(time == 30) {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchData+'&interval=30min&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Time Series (30min)';
        }
        if(time == 60) {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+searchData+'&interval=60min&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Time Series (60min)';
        }
        if(time == 'DAILY') {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+searchData+'&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Time Series (Daily)';
        }
        if(time == 'WEEKLY') {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol='+searchData+'&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Weekly Time Series';
        }
        if(time == 'MONTHLY') {
            kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='+searchData+'&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
            $scope.times = 'Monthly Time Series';
        }
        $scope.getData = service.getStock(kitkat).then(function(response) {
            $scope.getDatas = response;
            $scope.tipsDate = [];
            $scope.tipsValue = [];
            //console.log($scope.getDatas)
            var count = 0;
            $scope.series = [$scope.getDatas['Meta Data']['2. Symbol']];
            for(var key in $scope.getDatas[$scope.times]) {
              count++;
              if(count>$scope.ranges) {
                break;
              }
              $scope.tipsDate.push(key);
              $scope.tipsValue.push($scope.getDatas[$scope.times][key]['1. open'])
              
            }
            $scope.tipsDates = $scope.tipsDate.reverse();
            $scope.tipsValue = [$scope.tipsValue.reverse()]; //Item must be in [[1,2,3,4]] array in array for chart to chart properly;
        })
    }
});