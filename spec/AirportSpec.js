(function(){
  'use strict';
})();

describe("Airport", function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
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

});
