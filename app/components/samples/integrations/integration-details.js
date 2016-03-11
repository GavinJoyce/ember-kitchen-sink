import Em from 'ember';

export default Em.Component.extend({
  classNameBindings: ['integration.hasIntegrated', ':integration']
});
