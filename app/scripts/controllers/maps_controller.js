/*
    An HTML5 mobile app for navigating & browsing locations of public art, 
    architecture, and culture in Norfolk, VA. 
    Copyright (C) 2014 Ryan Y.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
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

