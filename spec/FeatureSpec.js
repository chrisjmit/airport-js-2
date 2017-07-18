(function(){
  'use strict';
})();

describe("Features:", function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  describe("I want to instruct", function() {

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
  });

  describe("I want to prevent", function() {

    it("takeoff when weather is stormy", function(){
      airport.clearForLanding(plane);
      weather.stormy();
      expect(airport._hangar).toContain(plane);
    });

    it("landing when weather is stormy", function(){
      weather.stormy();
      expect(airport._hangar).not.toContain(plane);
    });

    it("landing when the airport is full", function(){
      for (var i = 0; i < 11; i++){
        airport.clearForLanding(plane);
      }
      expect(airport._hangar.length).toBe(10);
    });
  });


});
