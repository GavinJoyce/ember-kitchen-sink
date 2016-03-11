import Em from 'ember';

export default Em.Route.extend({
  model: function(params) {
    return this.store.peekRecord('integration', params.integration_id);
  }
});
