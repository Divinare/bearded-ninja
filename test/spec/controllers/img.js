'use strict';

describe('Controller: ImgCtrl', function () {

  // load the controller's module
  beforeEach(module('beardedNinjaApp'));

  var ImgCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImgCtrl = $controller('ImgCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
