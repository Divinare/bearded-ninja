'use strict';

angular.module('beardedNinjaApp')
.controller('PhotoCtrl', function ($scope, $routeParams) {
	$scope.image = {
		name: 'foo',
		url: 'http://placehold.it/450x350/&text={PLACEHOLDER}',
		id: $routeParams.id
	};
});