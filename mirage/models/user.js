import { Model, belongsTo, hasMany} from 'ember-cli-mirage';

export default Model.extend({
  chirps : hasMany('chirp'),
  followees : belongsTo('user',{inverse : 'followers'}),
  followers : belongsTo('user',{inverse : 'followees'})
});
