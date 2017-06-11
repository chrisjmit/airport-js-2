function Airport() {
  this._hangar = [];
}

Airport.prototype.clearForLanding = function(plane){
  plane.land();
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane){
  this._hangar.pop(plane);
  plane.takeoff();
};
