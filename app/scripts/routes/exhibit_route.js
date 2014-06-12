Norfolkart.ExhibitRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('exhibit', params.exhibit_id);
  }
});

