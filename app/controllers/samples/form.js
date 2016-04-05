import Em from 'ember';

export default Em.Controller.extend({
  actions: {
    tokenUpdated(token) {
      console.log('GJ: tokenUpdated in controller', token);
      this.set('model.token', token);
    }
  }
});
