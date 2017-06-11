(function(){
  'use strict';
})();

describe("Weather", function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

it("can be stormy", function() {
  weather.stormy();
  expect(weather.isStormy).toEqual(true);
});

});
