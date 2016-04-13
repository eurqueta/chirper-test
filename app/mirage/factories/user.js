import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'number-of-chirps'() { return faker.name.numberOfChirps(); },
  'number-of-followings'() { return faker.name.numberOfFollowing(); },
  'number-of-followers'(){return faker.name.numberOfFollowers();}
});
