'use strict';

angular.module('animeindexApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('genre', {
        url: '/genre',
        templateUrl: 'app/genre/genre.html',
        controller: 'GenreCtrl'
      });
  });
