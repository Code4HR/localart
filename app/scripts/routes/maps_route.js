Norfolkart.MapsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('map');
  }
});

