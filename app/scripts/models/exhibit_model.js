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

/*global Ember
*/

/**
  * The exhibit model.
  *
  * @class Exhibit
  * @namespace Norfolkart
  * @constructor
  * @extends DS.Model
  */
Norfolkart.Exhibit = DS.Model.extend({
    /**
      * Represents the exhibit title.
      *
      * @property title
      * @readonly
      * @type Attribute
      * @default DS.attr('string')
      */
    title: DS.attr('string'),

    /**
      * Represents the exhibit latitude.
      *
      * @property title
      * @readonly
      * @type Attribute
      * @default DS.attr('number')
      */
    latitude: DS.attr('number'),

    /**
      * Represents the exhibit longitude.
      *
      * @property longitude
      * @readonly
      * @type Attribute
      * @default DS.attr('number')
      */
    longitude: DS.attr('number'),

    /**
      * Represents the exhibit location.
      * A short brain-friendly description of where to find this exhibit.
      *
      * @property location
      * @readonly
      * @type Attribute
      * @default DS.attr('string')
      */
    location: DS.attr('string'),

    /**
      * Represents the exhibit artists.
      *
      * @property artists
      * @readonly
      * @type Attribute
      * @default DS.attr('string')
      */
    artists: DS.attr('string'),

    /**
      * Represents the exhibit URL on the City of Norfolk website.
      *
      * @property url
      * @readonly
      * @type Attribute
      * @default DS.attr('string')
      */
    url: DS.attr('string'),

    /**
      * Represents the exhibit thumbnail image URL on the City of Norfolk
      * website.
      *
      * @property imageurl
      * @readonly
      * @type Attribute
      * @default DS.attr('string')
      */
    imageurl: DS.attr('string'),

    /**
      * Represents the exhibit full-size image URL on the City of Norfolk
      * website.
      *
      * @property fullimage
      * @readonly
      * @type Attribute
      * @default DS.attr('string')
      */
    fullimage: DS.attr('string'),
    /**
      * Represents the exhibit full-size image URL on the City of Norfolk
      * website.
      *
      * @property fullimage
      * @readonly
      * @type Attribute
      * @default DS.attr('string')
      */
    description: DS.attr('string')
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

Norfolkart.Exhibit.FIXTURES = [];
