(function(angular) {
  // 1.特效模块
  var app = angular.module('special', ['ngRoute'])
    // 2.路由规则
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.when('/special', {
        templateUrl: './view/special/special.html',
        controller: 'specialController'
      }).when('/special/banner', {
        templateUrl: './view/special/banner.html',
        controller: 'bannerController'
      }).when('/special/scroll', {
        templateUrl: './view/special/scroll.html',
        controller: 'scrollController'
      }).when('/special/show', {
        templateUrl: './view/special/show.html',
        controller: 'showController'
      }).when('/special/more', {
        templateUrl: './view/special/more.html',
        controller: 'moreController'
      })
    }])
    // 3.创建控制器
  app.controller('specialController', ['$scope', '$window', function($scope, $window) {


  }])
})(angular)