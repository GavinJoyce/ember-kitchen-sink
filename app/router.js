import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('samples', function() {
    this.route('integrations', function() {
      this.route('integration', { path: ':integration_id' });
    });
  });

  this.route('spikes', () => {

  });
});

export default Router;
