'use strict';

angular.module('animeindexApp')
  .controller('UserCtrl', function ($scope,$state, socket, Auth, User) {
    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    $scope.selectedUser = "";

    User.query(function(users){
      $scope.users = users;
      socket.syncUpdates('user', $scope.users);
    });

    $scope.$on('$destroy', function(){
      socket.unsyncUpdates('user');
    });

    $scope.goToUser = function(user) {

      $state.go('userdetails', {
        id: user._id
      });
    }
  });
