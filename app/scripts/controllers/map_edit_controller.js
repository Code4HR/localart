Norfolkart.MapEditController = Ember.ObjectController.extend({
  needs: 'map',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.map.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('map',this.get('model'));
    }
  }
});

