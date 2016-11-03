import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false

  actions: {
    reviewFormShow () {
      this.set('addNewReview', ture);
    },

    saveReview() {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        item: this.get('item')
      };
      this.set('addNewReview', false);
      this.set('saveReview', params)
    }
  }
});
