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
  .when('/photo/:id', {
    templateUrl: 'views/photo.html',
    controller: 'PhotoCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});