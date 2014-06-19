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
/** The model for the iArtNorfolk application route.
  *
  * @namespace Norfolkart
  * @class ApplicationRoute
  * @extends Ember.Route
  * @constructor */
Norfolkart.ApplicationRoute = Ember.Route.extend({
    /** Computation, loads exhibits from the external resource and stores them.
      * Current resource: local JSON.
      *
      * @method beforeModel */
    beforeModel: function () {
        'use strict';
        var store = this.get('store');
        Ember.$.getJSON('exhibits.json')
            .done(function (data) {
                var i;
                for (i = 0; i < data.length; i++) {
                    store.push('exhibit', data[i]);
                }
            });
    }
});

