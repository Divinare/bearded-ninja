'use strict';

var app = angular.module('beardedNinjaApp');

app.factory('Data', function(){
	var data = {};

	var randcol = function(){
		return (Math.random()*0xFFFFFF<<0).toString(16);
	};

	var i = 0;
	data.gen = function(){
		var URL = 'http://placehold.it/450x350/' + randcol() + '/' + randcol() + '/&text=[1337';

		return {imageUrl: URL + i++ + ']', id: i, created_at: event.timeStamp};
	};

	return data;
});


app.controller('MainCtrl', function ($scope, Data, $resource, $http) {

/*		$resource('/api/images').query(); */

	// $scope.images = [Data.gen(), Data.gen(), Data.gen()];

	$http.get('http://bearded-ninja-backend.herokuapp.com/images.json').success( function(data, status, headers, config) {
		console.log(data)
		$scope.images = data;
	});
	$scope.scroll = function scroll () {
		$scope.images.push(Data.gen());
	};
});

