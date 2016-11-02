import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  items: DS.hasMany('item', {async: true})
  // async true will fetch related entinties when you request it. therefore it will fetch an item or items user wants.

});
