(function(){
  'use strict';
})();

describe("Plane", function(){
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

it("finds that a plane exists", function(){
  expect(plane).toEqual(jasmine.any(Object));
});

it("changes the plane status to no longer flying", function(){
  plane.land();
  expect(plane.isFlying).toEqual(false);
});

it("changes the plane status to flying", function() {
  plane.land();
  plane.takeoff();
  expect(plane.isFlying).toBe(true);
});

});
