'use strict';

angular.module('animeindexApp.auth', [
  'animeindexApp.constants',
  'animeindexApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
