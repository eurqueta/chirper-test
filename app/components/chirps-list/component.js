import Ember from 'ember';

export default Ember.Component.extend({
  classNames : ['card'],
  tagName : 'ul',
  chirpsSorting: ['createdat:desc'],
  sortedChirps: Ember.computed.sort('chirps', 'chirpsSorting')
});
