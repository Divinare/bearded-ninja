'use strict';

angular.module('beardedNinjaApp')
.controller('PhotoCtrl', function ($scope, $routeParams, $http) {
	var data = {};

	$http.get('http://bearded-ninja-backend.herokuapp.com/images/' + $routeParams.id + '.json').success( function(data, status, headers, config) {
		console.log(data);
		console.log($routeParams.id);
		console.log(data.name);
		$scope.image = data;

		$scope.image.tags = [
			'hello ', 'wrold', 'hell2o ', 'wrol1d', 'hello4 ', 'wro2ld', 
		];

	});


});