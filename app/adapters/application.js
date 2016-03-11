import Em from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  pathForType(type) {
    const plural = Em.String.pluralize(type);
    return Em.String.underscore(plural);
  }
});
