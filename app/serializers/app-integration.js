import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  attrs: {
    integration: { key: 'integration_id' }
  },
  keyForAttribute(attr) {
    return Em.String.decamelize(attr);
  },
  keyForRelationship(attr) {
    return Em.String.decamelize(attr);
  }
});
