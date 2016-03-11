import Em from 'ember';

export default Em.Component.extend({
  actions: {
    connect: function() {
      let integration = this.get('integration');

      alert('TODO: Facebook connect');

      //TODO: send an action instead of creating record here
      integration.store.createRecord('appIntegration', {
        id: Em.generateGuid(),
        integration: integration
      });
    }
  }
});
