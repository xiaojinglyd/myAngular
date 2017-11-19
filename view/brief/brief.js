(function(angular) {
  // 1.简介模块
  var app = angular.module('brief', ['ngRoute'])
    // 2.路由规则
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.when('/brief', {
        templateUrl: './view/brief/brief.html',
        controller: 'briefController'
      })
    }])
    // 3.创建控制器
  // app.controller('briefController', ['$scope', function($scope) {
  //   //
  // }])
})(angular)