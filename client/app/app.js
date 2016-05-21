'use strict';

angular.module('animeindexApp', [
  'animeindexApp.auth',
  'animeindexApp.admin',
  'animeindexApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngMaterial',
  'ngMessages',
  'mgcrea.ngStrap',
  'angularUtils.directives.dirPagination'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.html5Mode(true);
  });
