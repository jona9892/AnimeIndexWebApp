'use strict';

describe('Controller: AnimeCtrl', function () {

  // load the controller's module
  beforeEach(module('animeindexApp'));

  var AnimeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimeCtrl = $controller('AnimeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
