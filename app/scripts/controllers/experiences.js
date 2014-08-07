'use strict';

/**
 * @ngdoc function
 * @name mickaelponsolleApp.controller:ExperiencesCtrl
 * @description
 * # ExperiencesCtrl
 * Controller of the mickaelponsolleApp
 */
angular.module('mickaelponsolleApp').controller('ExperiencesCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
		method: 'GET', 
		url: '/json/experiences.json'
	}).
    success(function(data) {
		$scope.experiences = data.experiences;
    }).
    error(function() {
	    window.alert('KO');
    });    	
}]);
