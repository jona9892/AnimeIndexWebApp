'use strict';

angular.module('animeindexApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      }),

      $stateProvider
      .state('topanime', {
        url: '/topanime',
        templateUrl: 'app/home/topanime.html',
        controller: 'TopanimeCtrl'
      }),

      $stateProvider
      .state('searchanime', {
        url: '/searchanime',
        templateUrl: 'app/home/searchanime.html',
        controller: 'AnimesearchCtrl'
      });
  });
