(function(){
  'use strict';
})();

describe("Features:", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("I want to instruct a plane to land at an airport and confirm it has landed", function(){
    airport.clearForLanding(plane);
    expect(airport._hangar).toContain(plane);
  });

  it("I want to instruct a plane to take off from an airport and confirm it is no longer at the airport", function() {
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport._hangar).toEqual([]);
    expect(plane.isFlying).toEqual(true);
  });

  describe("I want to prevent", function() {

    it("takeoff when weather is stormy", function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport._hangar).toContain(plane);
    });

  });

});
