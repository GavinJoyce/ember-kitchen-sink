import Em from 'ember';

export default Em.Route.extend({
  beforeModel: function() {
    this.store.pushPayload({ //static data
      integrations: [{
        id: 'facebook',
        type: 'oauth',
        description: 'Facebook connect here...'
      },
      {
        id: 'github',
        type: 'modal',
        description: 'Github connect here...'
      },
      {
        id: 'slack',
        type: 'modal',
        description: 'Slack connect here...'
      },
      {
        id: 'hipchat',
        type: 'modal',
        description: 'Hipchat integration description here....'
      }]
    });

    this.store.pushPayload({ //TODO: load from server // return this.store.findAll('app-integrations');
      app_integrations: [{
        id: '1',
        created_at: '2015-07-27T13:56:27.000Z',
        updated_at: '2015-07-27T13:56:27.000Z',
        integration_id: 'github'
      }]
    });
  }
});
