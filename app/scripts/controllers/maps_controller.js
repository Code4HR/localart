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

/** The model for the map controller.
  *
  * @class MapController
  * @constructor */
Norfolkart.MapController = Ember.ArrayController.extend({
    // Implement your controller here.

    /** Represents the centre latitude.
      *
      * @property latitude
      * @type Number
      * @default 36.84765224454971 */
    latitude: 36.84765224454971,

    /** Represents the centre longitude.
      *
      * @property longitude
      * @type Number
      * @default -76.2922677397728 */
    longitude: -76.2922677397728,

    actions: {
        /** Computation, public access to the geolocation function. 
          *
          * @public
          * @method findMe */
        findMe: function () {
            'use strict';
            this.findMe();
        }
    },

    /** Computation, gets the current geolocation position of the user. 
      *
      * @method findMe */
    findMe: function () {
        'use strict';
        window.navigator.geolocation.getCurrentPosition(
            this.centerMap,
            this.positionError
        );
    },

    /** Computation, centres the map on the given geolocation position.
      *
      * @method centerMap
      *
      * @param {Position} position A Position value to centre the map upon. */
    centerMap: function (position) {
        'use strict';

        // Currently, just shows the coordinates.
        alert(position.coords.latitude);
        alert(position.coords.longitude);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    },

    /** Computation, alerts the user that a geolocation error occurred.
      *
      * @method positionError
      *
      * @param {PositionError} error A PositionError value representing the 
      *     error. */
    positionError: function (error) {
        'use strict';
        var messages = [
            'Permission denied.',
            'Position unavailable.',
            'Timeout.'
        ];
        alert(
            messages.indexOf(error.code - 1) > -1 ?
                    messages[error.code - 1] :
                    'Unknown error.'
        );
    },

    /** Predicate constant, proves this controller has maps.
      *
      * @deprecated
      * @property hasMaps
      * @type Boolean
      * @default true */
    hasMaps: true
});


