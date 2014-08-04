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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
