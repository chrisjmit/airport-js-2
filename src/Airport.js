function Airport() {
  this._hangar = [];
  this._hangar_capacity = 10;
}

Airport.prototype.clearForLanding = function(plane){
  this.isFull();
  this.checkLandingWeather();
  plane.land();
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane){
  this.checkTakeoffWeather();
  this._hangar.pop(plane);
  plane.takeoff();
};

Airport.prototype.checkLandingWeather = function(){
  if (weather.isStormy === true) {
    throw new Error("Landing is not possible due to stormy weather.");
  }
};

Airport.prototype.checkTakeoffWeather = function(){
  if (weather.isStormy === true) {
    throw new Error("Take off cancelled. Weather is stormy.");
  }
};

Airport.prototype.isFull = function(){
  if (this._hangar.length === this._hangar_capacity){
    throw new Error("Airport is full");
  }
};
