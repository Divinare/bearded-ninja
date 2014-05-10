'use strict';
var app = angular.module('beardedNinjaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'infinite-scroll'
]);

app
.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/new', {
    templateUrl: 'views/new.html',
    controller: 'MainCtrl'
  })
  .when('/photo/:id', {
    templateUrl: 'views/photo.html',
    controller: 'PhotoCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});