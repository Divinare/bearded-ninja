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

		return URL + i++ + ']';
	};

	return data;
});


app.controller('MainCtrl', function ($scope, Data) {

	$scope.urls = [Data.gen(), Data.gen(), Data.gen()];

	$scope.scroll = function scroll () {
		$scope.urls.push(Data.gen());
	};

});

