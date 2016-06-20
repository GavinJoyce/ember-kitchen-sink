import Em from 'ember';

export default Em.Component.extend({
  count: null,
  doubled: Em.computed('count', function() {
    return this.get('count') * 2;
  }),

  init() {
    this._super(...arguments);
    console.log('inner');
  },
});
