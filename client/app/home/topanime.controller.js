'use strict';

angular.module('animeindexApp')
  .controller('TopanimeCtrl', function ($scope,$state, GenreService, AnimeService , $sce, Auth, User, $mdToast, $filter) {
    GenreService.query(function(genres){
      $scope.genres = genres;
    });
    $scope.search = {};
    $scope.totalAnimes = 0;
    $scope.animesPerPage = 50;

    function getResultsPage(pageNumber){
      AnimeService.paged({
        page: pageNumber,
        limit: $scope.animesPerPage,
        sortBy: $scope.propToSortOn,
        search: $scope.search.value
      },

        function(animes){
        $scope.totalAnimes = animes.total;
        $scope.animes = animes.docs;
        $scope.currentPage = pageNumber;
        socket.syncUpdates('anime', $scope.animes);
      });
    }

    $scope.$watch('search',function() {
      getResultsPage(1);
    }, true);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

  });
