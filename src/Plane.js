function Plane() {
  this.isFlying = true;
}

 Plane.prototype.land = function() {
   console.log("Plane has landed");
   return this.isFlying = false; //jshint ignore:line
 };

 Plane.prototype.takeoff = function() {
   return this.isFlying = true; //jshint ignore:line
 };
