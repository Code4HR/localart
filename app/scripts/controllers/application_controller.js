Norfolkart.ApplicationController = Ember.ArrayController.extend({
      needs: 'map'
    , map: Ember.computed.alias('controllers.map')
    , actions: {
	findMe: function () {
	    var map = this.get('map');
	    map.findMe();
	}
    }
});
