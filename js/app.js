angular.module('stocks',['chart.js','ui.grid', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "view/main.html",
            })
            .state('stocksRTD', {
                url: '/RealTimeStockData',
                templateUrl: "view/stockReal.html",
                controller: 'stockReal'
            })
            .state('purchase', {
                url: '/nigerianprince',
                templateUrl: "view/purchase.html",
                controller: 'purchase'
            })
            .state('tips', {
                url: '/tips',
                templateUrl: "view/tips.html",
                controller: 'tipsCtrl'
            })
            .state('broker', {
                url: '/LocateBroker',
                templateUrl: "view/broker.html",
                controller: 'brokerCtrl'
            })
        $urlRouterProvider
            .otherwise('/');
    })
