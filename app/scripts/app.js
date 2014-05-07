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
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'MainCtrl'
      })
        .when('/ladder', {
        templateUrl: 'views/ladder.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
