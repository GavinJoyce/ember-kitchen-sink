import Em from 'ember';

export default Em.Route.extend({
  actions: {
    transitionTo: function(name) {
      this.transitionTo(name);
    }
  }
});
