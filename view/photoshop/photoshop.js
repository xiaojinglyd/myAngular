(function(angular) {
  // 1.ps模块
  var app = angular.module('photoshop', ['ngRoute'])
    // 2.路由规则
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.when('/photoshop', {
        templateUrl: './view/photoshop/photoshop.html',
        controller: 'photoshopController'
      }).when('/photoshop/firecar', {
        templateUrl: './view/photoshop/firecar.html',
        controller: 'firecarController'
      }).when('/photoshop/Transformers', {
        templateUrl: './view/photoshop/Transformers.html',
        controller: 'TransformersController'
      }).when('/photoshop/makeup', {
        templateUrl: './view/photoshop/makeup.html',
        controller: 'makeupController'
      })
    }])
    // 3.创建控制器
    // app.controller('makeupController', ['$scope', function($scope) {
    //   //
    // }])
})(angular)