import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  username(i){
    return `usuario ${i}`;
  },
  numberOfChirps: 2,
  numberOfFollowing: 5,
  numberOfFollowers: 7,
  aboutMe: 'Probando ember-cli :D',
  joinedAt: new Date('2015-06-08T09:30:26')

});
