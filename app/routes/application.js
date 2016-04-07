import Em from 'ember';

export default Em.Route.extend({
  model() {
    console.log('Em.assert');
    Em.assert('thiswillfailindev');

    console.log('Em.debug');
    Em.debug('debug')

    console.log('Em.deprecate');
    Em.deprecate('deprecate')

    // console.log('Em.info');
    // Em.info('info')

    Em.runInDebug(() => {
      console.log('this is debug!');
    });

    console.log('Em.warn');
    Em.warn('warn')

  },
  actions: {
    transitionTo: function(name) {
      this.transitionTo(name);
    }
  }
});
