import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('title'),
  description: DS.attr('description'),
  image: DS.attr('image'),
  cost: DS.attr('cost')
  categories DS.hasMany('category', {async: true}),
  reviews: DS.hasMany('reviews', {async: true})
});
