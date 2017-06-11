function Airport() {
  this._hangar = [];
}

Airport.prototype.clearForLanding = function(plane){
  plane.land();
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane){
  if (weather.isStormy === true) {
    throw new Error("Take off cancelled. Weather is stormy.");
  }
  else
  this._hangar.pop(plane);
  plane.takeoff();
};
