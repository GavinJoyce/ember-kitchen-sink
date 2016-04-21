import Em from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Em.Component.extend({
  buttonText: 'Click me',
  buttonPressed: task(function * () {
    this.set('buttonText', '...please wait...');
    yield timeout(1001);
    this.set('buttonText', '...continue to wait...');
    yield timeout(1002);
    this.set('buttonText', 'Click me again');
  }).drop()
});
