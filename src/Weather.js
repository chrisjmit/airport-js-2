function Weather() {
  this.isStormy = false;
}

Weather.prototype.stormy = function() {
  return this.isStormy = true; //jshint ignore:line
};
