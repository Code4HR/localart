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

/**
  * The model for the tile layer.
  *
  * @namespace Norfolkart
  * @class TileLayer
  * @extends EmberLeaflet.TileLayer
  * @constructor
  */
Norfolkart.TileLayer = EmberLeaflet.TileLayer.extend({
    /**
      * Represents the url for map tiles.
      * Uses the Mapnik OpenStreetMap tile url.
      *
      * @property tileUrl
      * @type String
      * @default 'http://norfolkart-tiles.herokuapp.com/v2/iArt/{z}/{x}/{y}.png'
      */
    tileUrl: 'http://norfolkart-tiles.herokuapp.com/v2/iArt/{z}/{x}/{y}.png'
});

/**
  * The model for the backup tile layer.
  *
  * @namespace Norfolkart
  * @class TileLayer
  * @extends EmberLeaflet.TileLayer
  * @constructor
  */
Norfolkart.BackupTileLayer = EmberLeaflet.TileLayer.extend({
    /**
      * Represents the url for map tiles.
      * Uses the Mapnik OpenStreetMap tile url.
      *
      * @property tileUrl
      * @type String
      * @default 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
      */
    tileUrl: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
});

/**
  * The model for the marker layer.
  *
  * @namespace Norfolkart
  * @class MarkerLayer
  * @extends EmberLeaflet.MarkerLayer
  * @constructor
  */
Norfolkart.MarkerLayer =
    EmberLeaflet.MarkerLayer.extend(EmberLeaflet.PopupMixin, {
    /**
      * Handler, handles the click event on the marker by transitioning to
      * the exhibit view.
      *
      * NOTE: Uses a very hacky implementation found by Lennart Hildebrandt
      * found at https://github.com/gabesmed/ember-leaflet/issues/30.
      *
      * @method click
      * @param {jQuery.Event} event The click event on the marker.
      */
    popupContent: function () {
	    'use strict';
	    console.log(this);
	    console.log(this.get('content'));
	    var view =
		this._parentLayer.createChildView(Norfolkart.MapPopupView);
	    view.set('context', this.get('content'));
	    Ember.View.states.inDOM.enter(view);
	    view.createElement();
	    console.log(view.get('element'));
	    return view.get('element');
    }.property()
});

/**
  * The model for the marker collection layer.
  *
  * @namespace Norfolkart
  * @class MarkerCollectionLayer
  * @extends EmberLeaflet.MarkerCollectionLayer
  * @constructor
  */
Norfolkart.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend({
    /**
      * Represents the element to bind the content element to.
      *
      * @property contentBinding
      * @type String
      * @default 'controller'
      */
    contentBinding: 'controller',

    /**
      * Represents the layer for extra items on the map.
      *
      * @property itemLayerClass
      * @type EmberLeaflet.MarkerLayer
      * @default Norfolkart.MarkerLayer
      */
    itemLayerClass: Norfolkart.MarkerLayer
});

/**
  * The model for the map view.
  *
  * @namespace Norfolkart
  * @class MapView
  * @extends EmberLeaflet.MapView
  * @constructor
  */
Norfolkart.MapView = EmberLeaflet.MapView.extend({
    /**
      * Represents the style classes to apply to this view.
      * Uses the map style class.
      *
      * @property classNames
      * @type Array
      * @default ['map']
      */
    classNames: ['map'],

    /**
      * Represents the element to bind the map centre to.
      * Binds to the controller element centre.
      *
      * @property centerBinding
      * @type String
      * @default 'controller.centre'
      */
    centerBinding: 'controller.centre',

    /**
      * Represents the element to bind the map zoom to.
      *
      * @property zoomBinding
      * @type String
      * @default 'controller.zoom'
      */
    zoomBinding: 'controller.zoom',

    /** Represents options specific to the map view.
      *
      * @property options
      * @type Object
      * @default {minZoom: 13, maxZoom: 16}
      */
    options: {
	    minZoom: 13,
	    maxZoom: 16,
	    maxBounds: L.latLngBounds(
		L.latLng(36.75, -76.44),
		L.latLng(36.98, -76.13)
	    )
    },

    /**
      * Represents the minimum zoom level allowable.
      *
      * @property minZoom
      * @type Number
      * @default 13
      */
    minZoom: 13,

    /**
      * Represents the maximum zoom level allowable.
      *
      * @property maxZoom
      * @type Number
      * @default 16
      */
    maxZoom: 16,

    /**
      * Represents the associated child layers for the map.
      * iArtNorfolk uses a tileset and a collection of markers to function.
      *
      * @property childLayers
      * @type Array
      * @default [Norfolkart.TileLayer, Norfolkart.MarkerCollectionLayer]
      */
    childLayers: [
        Norfolkart.TileLayer,
        Norfolkart.MarkerCollectionLayer
    ]
});
