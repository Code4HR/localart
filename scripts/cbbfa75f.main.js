!function(){window.Norfolkart=Ember.Application.create()}(),function(){Norfolkart.ApplicationController=Ember.ArrayController.extend({needs:"map",map:Ember.computed.alias("controllers.map"),actions:{findMe:function(){"use strict";var a=this.get("map");a.findMe()}}})}(),function(){Norfolkart.MapController=Ember.ArrayController.extend({centre:L.latLng(36.84765224454971,-76.2922677397728),zoom:16,actions:{findMe:function(){"use strict";this.findMe()}},findMe:function(){"use strict";var a=this;window.navigator.geolocation.getCurrentPosition(function(b){a.set("centre",L.latLng(b.coords.latitude,b.coords.longitude)),a.transitionToRoute("map")},this.positionError)},positionError:function(a){"use strict";var b=["Permission denied.","Position unavailable.","Timeout."];alert(a.code-1>-1?b[a.code-1]:"Unknown error.")}})}(),function(){Norfolkart.ApplicationAdapter=DS.RESTAdapter.extend({host:"https://localartapi-code4hr.rhcloud.com"})}(),function(){Norfolkart.Exhibit=DS.Model.extend({title:DS.attr("string"),latitude:DS.attr("number"),longitude:DS.attr("number"),location:DS.attr("string"),artists:DS.attr("string"),url:DS.attr("string"),imageurl:DS.attr("string"),fullimage:DS.attr("string"),description:DS.attr("string")}),Norfolkart.Exhibit.reopen({attributes:function(){"use strict";var a=this;return Ember.keys(this.get("data")).map(function(b){return Em.Object.create({model:a,key:b,valueBinding:"model."+b})})}.property()}),Norfolkart.Exhibit.FIXTURES=[]}(),function(){Norfolkart.ExhibitRoute=Ember.Route.extend({model:function(a){"use strict";return this.get("store").find("exhibit",a.exhibit_id)}})}(),function(){Norfolkart.ExhibitsRoute=Ember.Route.extend({model:function(){"use strict";return this.get("store").find("exhibit")}})}(),function(){Norfolkart.IndexRoute=Ember.Route.extend({beforeModel:function(){"use strict";this.transitionTo("exhibits")}})}(),function(){Norfolkart.MapRoute=Ember.Route.extend({setupController:function(a,b){"use strict";var c=L.icon({iconUrl:"/images/arrow.png"});a.set("content",b.map(function(a){return{location:L.latLng(a.get("latitude"),a.get("longitude")),id:a.get("id"),title:a.get("title"),imageurl:a.get("imageurl"),icon:c}}))},model:function(){"use strict";return this.get("store").find("exhibit")}})}(),function(){Norfolkart.MapPopupView=Ember.View.extend({templateName:"map-popup"})}(),function(){Norfolkart.TileLayer=EmberLeaflet.TileLayer.extend({tileUrl:"http://norfolkart-tiles.herokuapp.com/v2/iArt/{z}/{x}/{y}.png"}),Norfolkart.BackupTileLayer=EmberLeaflet.TileLayer.extend({tileUrl:"http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"}),Norfolkart.MarkerLayer=EmberLeaflet.MarkerLayer.extend(EmberLeaflet.PopupMixin,{popupContent:function(){"use strict";console.log(this),console.log(this.get("content"));var a=this._parentLayer.createChildView(Norfolkart.MapPopupView);return a.set("context",this.get("content")),Ember.View.states.inDOM.enter(a),a.createElement(),console.log(a.get("element")),a.get("element")}.property()}),Norfolkart.MarkerCollectionLayer=EmberLeaflet.MarkerCollectionLayer.extend({contentBinding:"controller",itemLayerClass:Norfolkart.MarkerLayer}),Norfolkart.MapView=EmberLeaflet.MapView.extend({classNames:["map"],centerBinding:"controller.centre",zoomBinding:"controller.zoom",options:{minZoom:13,maxZoom:16,maxBounds:L.latLngBounds(L.latLng(36.75,-76.44),L.latLng(36.98,-76.13))},minZoom:13,maxZoom:16,childLayers:[Norfolkart.TileLayer,Norfolkart.MarkerCollectionLayer]})}(),function(){Norfolkart.Router.map(function(){"use strict";this.resource("exhibits"),this.resource("exhibit",{path:"/exhibit/:exhibit_id"}),this.resource("map"),this.resource("about",function(){this.route("javascript")})})}();