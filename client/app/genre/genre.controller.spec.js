'use strict';

describe('Controller: GenreCtrl', function () {

  // load the controller's module
  beforeEach(module('animeindexApp'));

  var GenreCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GenreCtrl = $controller('GenreCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
