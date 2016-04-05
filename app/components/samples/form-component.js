import Em from 'ember';

export default Em.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    let parts = this.get('token').split(':');
    this.setProperties({
      first: parts[0],
      second: parts[1],
      third: parts[2]
    });
  },

  actions: {
    doSomething: function() {
      let token = `${this.get('first')}:${this.get('second')}:${this.get('third')}`;
      this.get('onSave')(token);
    }
  }
});
