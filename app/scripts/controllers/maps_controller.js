/*
    An HTML5 mobile app for navigating & browsing locations of public art, 
    architecture, and culture in Norfolk, VA. 
    Copyright (C) 2014 Code for Hampton Roads contributors

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

    /** Represents the current map centre.
      *
      * @property centre
      * @type L.LatLng
      * @default L.latLng(36.84765224454971, -76.2922677397728) */
    centre: L.latLng(36.84765224454971, -76.2922677397728),


    /** Represents the current map zoom.
      *
      * @property zoom
      * @type Number
      * @default 16 */
    zoom: 16,

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
        var controller = this;

        window.navigator.geolocation.getCurrentPosition(
            /** Computation, centres the map on the given geolocation position.
              *
              * NOTE: Have to use as a closure, since otherwise this is 
              * undefined.
              *
              * @method centreMap
              *
              * @param {Position} position A Position value to centre the map 
              *     upon. */
            function centreMap(position) {
                controller.set('centre', L.latLng(
                    position.coords.latitude,
                    position.coords.longitude
                ));
                controller.transitionToRoute('map');
            },
            this.positionError
        );
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
            error.code - 1 > -1 ?
                    messages[error.code - 1] :
                    'Unknown error.'
        );
    }
});


