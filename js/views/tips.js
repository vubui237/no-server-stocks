// angular.module('stocks').controller('tipsCtrl', function($scope,service) {
      
//     $scope.getStock = function(searchData) {
//         // var kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+ searchData +'&interval=1min&outputsize=full&apikey=JLWNCZKBHO0KKNOI'
//         var kitkat = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=1min&outputsize=compact&apikey=JLWNCZKBHO0KKNOI'
//         $scope.getData = service.getStock(kitkat).then(function(response) {
//             $scope.getDatas = response;
//             $scope.tipsDate = [];
//             $scope.tipsValue = [];
//             var count = 0;
//             $scope.series = [$scope.getDatas['Meta Data']['2. Symbol']];
//             for(var key in $scope.getDatas['Time Series (Daily)']) {
//               count++;
//               if(count>30) {
//                 break;
//               }
//               $scope.tipsDate.push(key);
//               $scope.tipsValue.push($scope.getDatas['Time Series (Daily)'][key]['1. open'])
              
//             }
//             $scope.tipsDate = $scope.tipsDate.reverse();
//             $scope.tipsValue = [$scope.tipsValue].reverse();; //Item must be in [[1,2,3,4]] array in array for chart to chart properly;
//         })
//     }
  
//   $scope.getStock();
  
  
  
  
  
  
  
  
  
  
  
  
  //$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  //$scope.series = [''];
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];
  // $scope.onClick = function (points, evt) {
  //   console.log(points, evt);
  // };
  // // $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  // $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
  // $scope.options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         id: 'y-axis-1',
  //         type: 'linear',
  //         display: true,
  //         position: 'left'
  //       },
        // {
        //   id: 'y-axis-2',
        //   type: 'linear',
        //   display: true,
//         //   position: 'right'
//         // }
//       ]
//     }
//   };
// })