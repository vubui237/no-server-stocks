angular.module('stocks').controller('controller',function($scope,$timeout,service) {
    $scope.stockData = service.stockData().then(function(response) {
        $scope.index = response;
        $scope.myData = [
        {
        "Sector": "Consumer Discretionary",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Consumer Discretionary'],
        },
        {
        "Sector": "Consumer Staples",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Consumer Staples'],
        },
        {
        "Sector": "Energy",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Energy'],
        },
        {
        "Sector": "Financials",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Financials'],
        },
        {
        "Sector": "Health Care",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Health Care'],
        },
        {
        "Sector": "Industrials",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Industrials'],
        },
        {
        "Sector": "Information Technology",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Information Technology'],
        },
        {
        "Sector": "Materials",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Materials'],
        },
        {
        "Sector": "Telecommunication Services",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Telecommunication Services'],
        },
        {
        "Sector": "Utilities",
        "Yield %": $scope.index['Rank G: 1 Year Performance']['Utilities'],
        },

        ];
    })

    $scope.getStock = function(searchData) {
        var kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+ searchData +'&interval=1min&outputsize=full&apikey=JLWNCZKBHO0KKNOI'
        $scope.getData = service.getStock(kitkat).then(function(response) {
            $scope.getDatas = response;
        })
    }
})