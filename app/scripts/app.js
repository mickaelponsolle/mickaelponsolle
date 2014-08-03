'use strict';

/**
 * @ngdoc overview
 * @name mickaelponsolleApp
 * @description
 * # mickaelponsolleApp
 *
 * Main module of the application.
 */
angular
  .module('mickaelponsolleApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
