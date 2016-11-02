import Ember from 'ember';

export default Ember.Service.extend({
  itmes: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  }
});
