import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      console.log(params.item.get('reviews'));
    }
  }

});
