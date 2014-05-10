'use strict';

angular.module('beardedNinjaApp')
.controller('PhotoCtrl', function ($scope, $routeParams, $http) {

	$http.get('http://bearded-ninja-backend.herokuapp.com/api/images/' + $routeParams.id + '.json').success( function(data, status, headers, config) {
		console.log(data);
		console.log($routeParams.id);
		console.log(data.name);
		$scope.image = data;

		$scope.image.tags = ['as ', 'd', 'a ', 's', 'wer ', 'gfd'];

	});


});