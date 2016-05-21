'use strict';

angular.module('animeindexApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('anime', {
        url: '/anime',
        templateUrl: 'app/anime/anime.html',
        controller: 'AnimeCtrl'
      }),

      $stateProvider
      .state('animeCreate', {
        url: '/animeCreate',
        templateUrl: 'app/anime/animeCreate.html',
        controller: 'AnimeCtrl'
      });
  });
