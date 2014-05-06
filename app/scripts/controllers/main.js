'use strict';

var app = angular.module('beardedNinjaApp');

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.urls = [
      {name: "http://placehold.it/450x350&text=randomgenid"},
      {name: "http://placehold.it/450x350&text=randomgenid"},
      {name: "http://placehold.it/450x350&text=randomgenid"}
    ];

});