import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeItem(item) {
      if (confirm('Are you sure you want to delete item')) {
        this.sendAction('destroyItem', item);
      }
    }
  }
});
