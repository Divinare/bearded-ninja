'use strict';

angular
  .module('beardedNinjaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ladder', {
        templateUrl: 'views/ladder.html',
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
