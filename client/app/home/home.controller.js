'use strict';

angular.module('animeindexApp')
  .controller('HomeCtrl', function ($scope,$state, GenreService, AnimeService , $sce, Auth, User, $mdToast, $filter, socket) {
    $scope.isLogged = Auth.isLoggedIn();
    $scope.isAdmin = Auth.isAdmin;

    $scope.selectedUser = "";
    User.query(function(users){
      $scope.users = users;
    });

    $scope.theUser = {};

    $scope.goToUser = function(user) {
      $state.go('userdetails', {

        id: user._id
      });
    }

    //Used for the trailer
    $scope.trustSrc = function(trailer) {
    return $sce.trustAsResourceUrl(trailer);
    }
    //Used for the trailer
    $scope.anime = {trailer:"{{chosenAnime.trailer}}", title:"Anime trailer"};

    GenreService.query(function(genres){
      $scope.genres = genres;
    });

    $scope.search = {};
    $scope.totalAnimes = 0;
    $scope.animesPerPage = 9;


    function getResultsPage(pageNumber){
      AnimeService.paged({
        page: pageNumber,
        limit: $scope.animesPerPage,
        sortBy: $scope.propToSortOn,
        search: $scope.search.value },

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

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };


    //This will set the updatingAnime to an anime
    $scope.setChosenAnime = function(anime){
      $scope.chosenAnime = anime;
    };

    //This will set the updatingAnime to undefined
    $scope.undoChosenAnime = function(){
        $scope.chosenAnime = undefined;
    };


    //-------------------------------------------------------------------------------------
      $scope.userCurrent = Auth.getCurrentUser();
      
      $scope.newAnimeStatus = {};
      $scope.newAnimeToList = {};

      $scope.addAnimeToList = function(chosenAnime){
        $scope.newAnimeToList = chosenAnime;

        $scope.addToAnimeArray = {
          theAnime: $scope.newAnimeToList,
          status: "Watching",
          rating: 1,
          episodeSeen: 1
        }

        $scope.userCurrent.animes.push($scope.addToAnimeArray);

        User.update({
          id:$scope.userCurrent._id
        }, $scope.userCurrent, function(user) {
          $scope.userCurrent = user;

          var toast = $mdToast.simple()
          .textContent('Anime added to your list')
          .action('OK')
          .highlightAction(false)
          .position('bottom');
          $mdToast.show(toast);
        });
      };

      //-------------------------------------------------------------------------
      $scope.sort = function(keyname){
        $scope.propToSortOn = keyname;
        $scope.reverse = !$scope.reverse;
        if($scope.reverse){
          $scope.propToSortOn = '-' + $scope.propToSortOn;
        }
        getResultsPage($scope.currentPage);
      }



});
