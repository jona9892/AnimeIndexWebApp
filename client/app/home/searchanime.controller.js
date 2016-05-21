'use strict';

angular.module('animeindexApp')
  .controller('AnimesearchCtrl', function ($scope,$state, GenreService, AnimeService , $sce, Auth, User, $mdToast, $filter, socket) {
    GenreService.query(function(genres){
      $scope.genres = genres;
    });

    $scope.search = {};
    $scope.totalAnimes = 0;
    $scope.animesPerPage = 10;

    function getResultsPage(pageNumber){
      AnimeService.paged({
        page: pageNumber,
        limit: $scope.animesPerPage,
        sortBy: $scope.propToSortOn,
        search: $scope.search.value,
        searchType: $scope.selectedType.value,
        searchStatus: $scope.selectedStatus.value,
        searchRating: $scope.selectedRating.value,
        searchGenre: $scope.selectedGenre.value
      },

        function(animes){
        $scope.totalAnimes = animes.total;
        $scope.animes = animes.docs;
        $scope.currentPage = pageNumber;
        socket.syncUpdates('anime', $scope.animes);
      });
    }

    $scope.$watch('search', function() {
      getResultsPage(1);
    }, true);

    $scope.$watch('selectedType', function() {
      getResultsPage(1);
    }, true);

    $scope.$watch('selectedStatus', function() {
      getResultsPage(1);
    }, true);

    $scope.$watch('selectedRating', function() {
      getResultsPage(1);
    }, true);

    $scope.$watch('selectedGenre', function() {
      getResultsPage(1);
    }, true);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

    //---------------Search and sort-------------------------------------------

    $scope.checkboxSearch = [];
    $scope.toggle = function (genre) {
      var idx = $.inArray(genre,$scope.checkboxSearch );
      if (idx > -1) {
        $scope.checkboxSearch.splice(idx, 1);
      }
      else {
        $scope.checkboxSearch.push(genre);
      }
   };

    $scope.propToSortOn ="title";

    $scope.sort = function(keyname){
      $scope.propToSortOn = keyname;
      $scope.reverse = !$scope.reverse;
      if($scope.reverse){
        $scope.propToSortOn = '-' + $scope.propToSortOn;
      }
      getResultsPage($scope.currentPage);
    }

    $scope.selectedGenre = {};
    $scope.genreSearch = function(genre){
      $scope.selectedGenre = genre;
    }

    $scope.selectButton = function(index) {
      $scope.clicked = index;
    }

    $scope.types = ["Movie", "TV", "OVA", "Speciel"];
    $scope.selectedType = {};

    $scope.statuses = ["Not aired", "Airing", "Ongoing", "Completed"];
    $scope.selectedStatus = {};

    $scope.ratings = [1,2,3,4,5,6,7,8,9];
    $scope.selectedRating = {};
    //---------------------------------------------------------------

    //------------------------------------------------------------------------

    $scope.open = undefined;

    $scope.btnOpen = function(value){
      $scope.open = value;
    }

    $scope.close = function(){
      $scope.open = undefined;
    }
  });
