import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  text(i){
    return `"Hello world!" ${i}`
  },
  createdAt: new Date('2015-06-08T09:30:26')
});
