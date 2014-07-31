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
    EmberLeaflet.MarkerLayer.extend({
        /**
          * Handler, handles the click event on the marker by transitioning to
          * the exhibit view.
          *
          * @method click
          * @param {jQuery.Event} event The click event on the marker.
          */
        click: function (event) {
            'use strict';
            this.get('controller').transitionToRoute('exhibit',
                this.get('content.id'));
        }
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
