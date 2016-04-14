import DS from 'ember-data';

export default DS.Model.extend({
  username : DS.attr('string'),
  numberofchirps : DS.attr('number'),
  numberoffollowing: DS.attr('number'),
  numberoffollowers: DS.attr('number'),
  aboutme: DS.attr('string'),
  joinedat: DS.attr('date'),
  chirps: DS.hasMany('chirp',{async:true})
});
