'use strict';

angular.module('animeindexApp')
  .controller('UserDetailsCtrl', function ($scope, $state, $stateParams, $mdToast, socket, Auth, User, $mdDialog) {

    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    $scope.user = {};

    $scope.getCompleted = [];
    $scope.getWatching = [];
    $scope.getUnhold = [];
    $scope.getDropped = [];
    $scope.getPlanToWatch = [];
    User.get({id:$stateParams.id}, function(user) {
      $scope.user = user;
      $scope.userCurrent = Auth.getCurrentUser();

      var checkUser = function(){
        console.log($scope.userCurrent.name);
        console.log($scope.user.name);
        if(angular.equals($scope.userCurrent.name, $scope.user.name)){
          return true;
        } else {
          return false;
        }
      }
      $scope.getUser = checkUser();


      //Get an array of animes with the status completed
      for(var i = 0; i<user.animes.length; i++){
         $scope.anime = user.animes[i];
         if($scope.anime.status == "Completed"){
           $scope.getCompleted.push($scope.anime);
         } else if($scope.anime.status == "Watching"){
            $scope.getWatching.push($scope.anime);
         }else if($scope.anime.status == "Unhold"){
            $scope.getUnhold.push($scope.anime);
         }else if($scope.anime.status == "Dropped"){
            $scope.getDropped.push($scope.anime);
         }else if($scope.anime.status == "Plan to watch"){
            $scope.getPlanToWatch.push($scope.anime);
         }
       }
    });

    $scope.goBack = function(){
      window.history.back();
    };

    $scope.goToUser = function(user) {
      $state.go('userdetails', {
        id: user._id
      });
    }

    $scope.goToAnimelist = function(user) {
      $state.go('useranimelist', {
        id: user._id
      });
    }

    $scope.propToSortOn ="title";

    $scope.sort = function(keyname){
      $scope.propToSortOn = keyname;
      $scope.reverse = !$scope.reverse;
    }

    //----------------------Edit animelist--------------------------

    //This will set the updatingAnime to undefined
    $scope.undoAnimelistUpdate = function(){
        $scope.updatingAnimelist = undefined;
        $scope.episodes = [];
    };
    //This will set the updatingAnime to an anime and fill the episode array
    $scope.setUpdatingAnimelist = function(animelist){
      $scope.updatingAnimelist = animelist;
      for (var i = 1; i < $scope.updatingAnimelist.theAnime.episodeCount; i++) {
        $scope.episodes.push(i);
      }
    };

    $scope.statuses = ["Completed", "Watching", "Unhold", "Dropped", "Plan to watch"];
    $scope.selectedStatus = {};

    $scope.ratings = [1,2,3,4,5,6,7,8,9,10];
    $scope.selectedRating = {};

    $scope.episodes = [];
    $scope.selectedEpisode = {};


    //This should update the animelist
    $scope.saveAnimelist = function(form){
        if (form.$valid) {
        User.update({
          id: $scope.user._id
        }, $scope.user,

        function(user) {
          $scope.user = user;
          form.$setPristine();
          form.$setUntouched();
          var toast = $mdToast.simple()
            .textContent('User: '+user.name+ ' updated')
            .action('OK')
            .highlightAction(true)
            .position('bottom');
          $mdToast.show(toast);

        });
    };
    $scope.episodes = [];
    $scope.updatingAnimelist = undefined;
    User.get({id:$stateParams.id}, function(user) {
      $scope.user = user;
    });
    location.reload();
  };
//------------------------------------------------------------------------------


});
