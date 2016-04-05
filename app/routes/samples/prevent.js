import Em from 'ember';

export default Em.Route.extend({
  beforeModel: function(transition) {
    console.log('TODO: GJ: prevent');
    transition.abort();
  }
});
