'use strict';

angular.module('animeindexApp')
  .controller('GenreCtrl', function ($scope, GenreService, socket, $mdDialog, $mdToast, Auth) {

    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    $scope.propToSortOn ="name";

    $scope.sort = function(keyname){
      $scope.propToSortOn = keyname;
      $scope.reverse = !$scope.reverse;
    }

    GenreService.query(function(genres){
      $scope.genres = genres;

      socket.syncUpdates('genre', $scope.genres);
    });

    $scope.$on('$destroy', function(){
      socket.unsyncUpdates('genre');
    });

//------------------------------------------------------------------------------
    $scope.newGenre = {};
    $scope.addGenre = function(form){
        if(form.$valid){
        GenreService.save($scope.newGenre);

        form.$setPristine();
        form.$setUntouched();
        var toast = $mdToast.simple()
          .textContent('Genre: '+ $scope.newGenre.name +' created')
          .action('OK')
          .highlightAction(false)
          .position('bottom');
          $mdToast.show(toast);
          $scope.newGenre = {};
        //--------------------------------------------
      };
    };
//------------------------------------------------------------------------------
    $scope.deleteGenre = function(genre, event){
      //Sets up the dialog
      var confirm = $mdDialog.confirm()
      .title("Delete genre")
      .textContent('Are you sure you want to delete the genre?')
      .ariaLabel('Delete')
      .targetEvent(event)
      .openFrom('#left')
      .ok('Yes')
      .cancel('Cancel');
      //This will show the confirm dialog and then delete the specified anime
      $mdDialog.show(confirm).then(function(){
        GenreService.delete({
          id: genre._id
        });

        GenreService.update({
          id: genre._id
        }, $scope.genre, function(genre){
          $scope.genre = genre;
          var toast = $mdToast.simple()
          .textContent('Genre: '+ genre.name + ' deleted')
          .action('OK')
          .highlightAction(false)
          .position('bottom');
          $mdToast.show(toast);
          $scope.updatingGenre = undefined;
        });
      });
    };
//------------------------------------------------------------------------------
//This will set the updatingGenre to a genre
$scope.setUpdatingGenre = function(genre){
  $scope.updatingGenre = genre;
};

//This will set the updatingAnime to undefined
$scope.undoGenreUpdate = function(){
    $scope.updatingGenre = undefined;
};

    //This should update a genre
    $scope.updateGenre = function(form){
        if (form.$valid) {
        GenreService.update({
          id: $scope.updatingGenre._id
        }, $scope.updatingGenre,
        //Forstår ikke det her
        function(genre) {
          $scope.genre = genre;
          form.$setPristine();
          form.$setUntouched();
          var toast = $mdToast.simple()
            .textContent('Genre: '+ genre.name +' updated')
            .action('OK')
            .highlightAction(true)
            .position('bottom');
          $mdToast.show(toast);
        });
      $scope.updatingGenre = undefined;
    };
  };



  });
