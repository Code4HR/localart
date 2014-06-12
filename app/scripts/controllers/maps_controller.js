Norfolkart.MapController = Ember.ObjectController.extend({
    actions: {
	findMe: function () {
	    this.findMe();
	}
    }, findMe: function () {
	window.navigator.geolocation.getCurrentPosition(this.centerMap, this.positionError);
    }, centerMap: function (position) {
	alert(position.coords.latitude);
	alert(position.coords.longitude);
	this.latitude = position.coords.latitude;
	this.longitude = position.coords.longitude;
    }, positionError: function (error) {
	alert(
	    error.code === 1 ? 'Permission denied.' :
	    error.code === 2 ? 'Position unavailable.' :
	    error.code === 3 ? 'Timeout.' : 'Unknown error.');
    }, hasMaps: true
    , latitude: 36.84765224454971
    , longitude: -76.2922677397728
  // Implement your controller here.
});

