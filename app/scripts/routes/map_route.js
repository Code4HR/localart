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

/** The model for the map route.
  *
  * @class MapRoute
  * @constructor */
Norfolkart.MapRoute = Ember.Route.extend({
    /** Computation, configures the map route controller with exhibit 
      * coordinates.
      *
      * @method setupController
      * @param {Ember.Controller} controller The map controller.
      * @param {DS.Model} model The map model, all exhibits. */
    setupController: function (controller, model) {
        'use strict';

        /** Map function, returns a value with just a location element 
          * representing the exhibit coordinates.
          *
          * @param {Norfolkart.Exhibit} exhibit The current exhibit.
          * @param {Number} i The current exhibit index.
          * @param {Ember.Array} The exhibit list.
          *
          * @return {Ember.Array} The exhibit coordinates list. */
        controller.set('content', model.map(function (exhibit, i, list) {
            return {
                location: L.latLng(
                    exhibit.get('latitude'),
                    exhibit.get('longitude')
                ),
                id: exhibit.get('id'),
                title: exhibit.get('title'),
                imageurl: exhibit.get('imageurl')
            };
        }));
    },

    /** Returns the map model, all exhibits.
      *
      * @method model
      *
      * @return {DS.Model} All exhibits. */
    model: function () {
        'use strict';
        return this.get('store').find('exhibit');
    }
});

