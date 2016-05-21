'use strict';

angular.module('animeindexApp')
  //Creates the controller, and dependency injects the functions we need
  .controller('AnimeCtrl', function ($scope, $mdDialog, $mdToast, $state,
    AnimeService, $location, socket, GenreService, Auth, $timeout, $stateParams) {

    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    $scope.sort = function(keyname){
      $scope.propToSortOn = keyname;
      $scope.reverse = !$scope.reverse;
      if($scope.reverse){
        $scope.propToSortOn = '-' + $scope.propToSortOn;
      }
      getResultsPage($scope.currentPage);
    }

    //--------------------------------------------------------------------------

    //uses the url path to go to animeIndex
    $scope.goToAnimeIndex = function(path){
      $location.path(path);
    };

    //goes to the create page html, base on the path
    $scope.goToAnimeCreate = function(path){
      $location.path(path);
    };
   //---------------------------------------------------------------------------

   GenreService.query(function(genres){
     $scope.genres = genres;
   });

    /*
    //this uses the query to get everything from the database when calling the url api/animes
    AnimeService.query(function(animes){
      //When it has found all the animes, it will use the function to take the
      //animes and save them on the scope.
      //This means that $scope.animes contains all the animes
      $scope.animes = animes;

      //This uses the socket to update the animes, whenever something is added or removed
      //It needs a model and array, and if needed a callback
      socket.syncUpdates('anime', $scope.animes);
    });
    */
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


    //We uses this on destroy to make the client stop listening for updates
    $scope.$on('$destroy', function(){
      socket.unsyncUpdates('anime');
    });

    //This goes back to the previously window
    $scope.goBack = function(){
      window.history.back();
    };

    //--------------------------------------------------------------------------
    //We uses this to make sure the newAnime is clear and that we have one on the scope
    $scope.newAnime = {};
    //This will add the newAnime using the form if it is valid
    //If the validation messages is okay, then it is valid
    $scope.addAnime = function(form){
        if(form.$valid){
          //Saves the newAnime
          AnimeService.save($scope.newAnime);

        form.$setPristine();
        form.$setUntouched();
        var toast = $mdToast.simple()
          .textContent('Anime: ' + $scope.newAnime.title + ' created')
          .action('OK')
          .highlightAction(false)
          .position('bottom');
          $mdToast.show(toast);
          $scope.newAnime = {};
        //--------------------------------------------
      };
    };

    //--------------------------------------------------------------------------

    //This will set the updatingAnime to undefined
    $scope.undoAnimeUpdate = function(){
        $scope.updatingAnime = undefined;
    };
    //This will set the updatingAnime to an anime
    $scope.setUpdatingAnime = function(anime){
      $scope.updatingAnime = anime;
    };

    //This should update an anime
    $scope.updateAnime = function(form){
        if (form.$valid) {
        AnimeService.update({
          id: $scope.updatingAnime._id
        }, $scope.updatingAnime,

        function(anime) {
          $scope.anime = anime;
          form.$setPristine();
          form.$setUntouched();
          var toast = $mdToast.simple()
            .textContent('Anime: '+anime.title+ ' updated')
            .action('OK')
            .highlightAction(true)
            .position('bottom');
          $mdToast.show(toast);
        });
        $scope.updatingAnime = undefined;
    };
  };

    //--------------------------------------------------------------------------
      //This will delete an anime with a dialog
      $scope.deleteAnime = function(anime, event){
        //Sets up the dialog
        var confirm = $mdDialog.confirm()
        .title("Delete anime")
        .textContent('Are you sure you want to delete the anime?')
        .ariaLabel('Delete')
        .targetEvent(event)
        .openFrom('#left')
        .ok('Yes')
        .cancel('Cancel');
        //This will show the confirm dialog and then delete the specified anime
        $mdDialog.show(confirm).then(function(){
          AnimeService.delete({
            id: anime._id
          });

          AnimeService.update({
            id: anime._id
          }, $scope.anime, function(anime){
            $scope.anime = anime;
            var toast = $mdToast.simple()
            .textContent('Anime: '+ anime.title + ' deleted')
            .action('OK')
            .highlightAction(false)
            .position('bottom');
            $mdToast.show(toast);
            $scope.updatingAnime = undefined;

          });
        });
      };
    //--------------------------------------------------------------------------
    //This will set the updatingAnime to undefined
    $scope.undoGenreUpdate = function(){
        $scope.updatingGenre = undefined;
    };
    //This will set the updatingAnime to an anime
    $scope.setUpdatingGenre = function(value){
      $scope.updatingGenre = value;
    };

    $scope.newGenre = {};
    $scope.addGenre = function(newGenre){

        $scope.newGenre = newGenre;
        $scope.updatingAnime.genres.push($scope.newGenre);
        AnimeService.update({
          id: $scope.updatingAnime._id
        }, $scope.updatingAnime,

        function(anime) {
          $scope.anime = anime;
          var toast = $mdToast.simple()
            .textContent('Genre added')
            .action('OK')
            .highlightAction(true)
            .position('bottom');
          $mdToast.show(toast);
        });
      $scope.updatingGenre = false;

  };

    //--------------------------------------------------------------------------

    $scope.deleteGenre = function(genre, event) {
      var confirm = $mdDialog.confirm()
        .title('Delete Genre')
        .textContent('Are you sure you want to delete the Genre?')
        .ariaLabel('Delete')
        .targetEvent(event)
        .openFrom('#right')
        .ok('Please do it!')
        .cancel('No I changed my mind');
      $mdDialog.show(confirm).then(function() {
        _.remove($scope.updatingAnime.genres ,function(gen) {
          return gen._id === genre._id;

        });

        AnimeService.update({
          id: $scope.updatingAnime._id
        }, $scope.updatingAnime, function(anime) {
          $scope.anime = anime;
          var toast = $mdToast.simple()
            .textContent('Genre Deleted')
            .action('OK')
            .highlightAction(false)
            .position('top');
          $mdToast.show(toast);

        });
      });
    };

    //--------------------------------------------------------------------------
  });
