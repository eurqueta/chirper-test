import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('user').user.get('chirps');
  }
});
