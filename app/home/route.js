import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log(this.store.findRecord('user',1))
    return {1 : 'eurqueta'};
  }

});
