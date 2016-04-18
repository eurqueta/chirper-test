import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  following : hasMany('user'),
  follower: hasMany('user')
});
