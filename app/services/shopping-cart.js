import Ember from 'ember';

export default Ember.Service.extend({
  itmes: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    this.get('items').removeObject(item);
  },
  totalCost: Ember.computed('items.[]', function() {
    var allCost = 0;
    for (var i = 0, < this.get('items.length'); i ++) {
      allCost += this.get('items')[i].get('cost');
    }
    return allCost;
  }
});
