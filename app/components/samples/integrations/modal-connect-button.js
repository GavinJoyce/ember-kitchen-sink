import Em from 'ember';

export default Em.Component.extend({
  actions: {
    showModal: function() {
      let integration = this.get('integration');

      alert('TODO: show a modal');

      //TODO: send an action instead of creating record here
      integration.store.createRecord('appIntegration', {
        id: Em.generateGuid(),
        integration: integration
      });
    }
  }
});
