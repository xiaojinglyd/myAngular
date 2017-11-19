(function(angular) {
  // 1.项目模块
  var app = angular.module('project', ['ngRoute'])
    // 2.路由规则
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider.when('/project', {
        templateUrl: './view/project/project.html',
        controller: 'projectController'
      })
    }])
    // 3.创建控制器
  // app.controller('projectController', ['$scope', function($scope) {
  //   //
  // }])
})(angular)