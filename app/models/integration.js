import Em from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  type: DS.attr(),
  appIntegration: DS.belongsTo('appIntegration'),

  hasIntegrated: Em.computed.notEmpty('appIntegration.content'),

  buttonComponentPath: Em.computed('type', function() {
    let componentName = 'modal-connect-button';
    if(this.get('type') === 'oauth') {
      componentName = `${this.get('id')}-connect-button`;
    }

    return `samples/integrations/${componentName}`;
  })
});
