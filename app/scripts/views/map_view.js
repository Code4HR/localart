Norfolkart.TileLayer = EmberLeaflet.TileLayer.extend({
    tileUrl: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
});

Norfolkart.MarkerLayer = EmberLeaflet.MarkerLayer.extend(EmberLeaflet.PopupMixin, {
    popupContentBinding: 'content.title'
});

Norfolkart.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend({
      contentBinding: 'controller'
    , itemLayerClass: Norfolkart.MarkerLayer
});

Norfolkart.MapView = EmberLeaflet.MapView.extend({
      classNames: ['map']
    , center: L.latLng(36.84765224454971, -76.2922677397728)
    , zoom: 16
    , childLayers: [
	  Norfolkart.TileLayer
	, Norfolkart.MarkerCollectionLayer
    ]
});
