Norfolkart.ExhibitEditController = Ember.ObjectController.extend({
  needs: 'exhibit',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.exhibit.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('exhibit',this.get('model'));
    }
  }
});

