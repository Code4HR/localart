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

/*global Ember*/
Norfolkart.Exhibit = DS.Model.extend({
    title: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    location: DS.attr('string'),
    artists: DS.attr('string'),
    url: DS.attr('string'),
    imageurl: DS.attr('string'),
    fullimage: DS.attr('string')
});

// probably should be mixed-in...
Norfolkart.Exhibit.reopen({
    attributes: function () {
        'use strict';
        var model = this;
        return Ember.keys(this.get('data')).map(function (key) {
            return Em.Object.create({
                model: model,
                key: key,
                valueBinding: 'model.' + key
            });
        });
    }.property()
});

// delete below here if you do not want fixtures
Norfolkart.Exhibit.FIXTURES = [];

