'use strict';

angular.module('beardedNinjaApp')
.controller('PhotoCtrl', function ($scope, $routeParams, $http) {


	   $http.get('http://bearded-ninja-backend.herokuapp.com/images/' + $routeParams.id + '.json').success( function(data, status, headers, config) {
       console.log(data)
       console.log($routeParams.id)
       console.log(data.name)
       $scope.entries = data;
    });

	   	$scope.image = {
        
	   	console.log(data.name)
		name: data.name,
		url: 'http://placehold.it/450x350/&text={PLACEHOLDER}',
		id: $routeParams.id

	};
});