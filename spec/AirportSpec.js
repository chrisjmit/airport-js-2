(function(){
  'use strict';
})();

describe("Airport", function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  it("exists", function (){
    expect(airport).toEqual(jasmine.any(Object));
  });

  it("clears a plane for landing", function(){
    airport.clearForLanding(plane);
    expect(airport._hangar).toContain(plane);
  });

  it("clears a plane for takeoff", function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport._hangar).toEqual([]);
  });

  it("prevents a plane from taking off when the weather is stormy", function() {
    airport.clearForLanding(plane);
    weather.stormy();
    expect(function(){airport.clearForTakeoff(plane);}).toThrowError("Take off cancelled. Weather is stormy.");
  });

  it("prevents a plane from landing when stormy", function() {
    weather.stormy();
    expect(function(){ airport.clearForLanding(plane);}).toThrowError("Landing is not possible due to stormy weather.");
  });

  it("prevents a plane from landing at a full airport", function() {
    expect()
  });
});
