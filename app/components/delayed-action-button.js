import Em from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Em.Component.extend({
  buttonText: 'Click me',
  buttonPressed: task(function * () {
    this.set('buttonText', '...please wait...');
    yield timeout(1000);
    this.set('buttonText', 'Click me again');
  }).drop()
});
