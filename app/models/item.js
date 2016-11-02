import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('title'),
  description: DS.attr('description'),
  image: DS.attr('image'),
  cost: DS.attr('cost')
});
