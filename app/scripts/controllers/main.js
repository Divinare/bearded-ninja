'use strict';

var app = angular.module('beardedNinjaApp');

app.factory('Data', function(){
	var data = {};
	var URL = 'http://placehold.it/450x350&text=1337';
	var i = 0;

	data.gen = function(){
		return URL + i++;
	};

	return data;
});


app.controller('MainCtrl', function ($scope, Data) {

	$scope.urls = [Data.gen(), Data.gen(), Data.gen()];

	$scope.scroll = function scroll () {
		$scope.urls.push(Data.gen());
	}

});