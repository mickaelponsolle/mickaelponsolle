'use strict';

/**
 * @ngdoc overview
 * @name mickaelponsolleApp
 * @description
 * # mickaelponsolleApp
 *
 * Main module of the application.
 */
 var app = angular
  .module('mickaelponsolleApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/formations', {
        templateUrl: 'views/formations.html',
      })
      .when('/experiences', {
        templateUrl: 'views/experiences.html',
        controller: 'ExperiencesCtrl'
      })
      .when('/competences', {
        templateUrl: 'views/competences.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });



app.config(['$tooltipProvider', function($tooltipProvider){
  $tooltipProvider.setTriggers({
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur',
    'never': 'mouseleave' // <- This ensures the tooltip will go away on mouseleave
  });
}]);