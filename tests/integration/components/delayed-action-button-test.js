import Em from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delayed-action-button', 'Integration | Component | delayed action button', {
  integration: true
});

//this test uses a longer `Em.run.later`
test('option 1: should change text after a delay', function(assert) {
  assert.expect(3);

  this.render(hbs`{{delayed-action-button}}`);

  assert.equal(this.$('button').text(), 'Click me');

  Em.run(() => this.$('button').click());

  assert.equal(this.$('button').text(), '...please wait...');

  Em.run.later(() => {
    assert.equal(this.$('button').text(), 'Click me again');
  }, 1050);

  return wait();
});

//this test mocks `Em.run.later`
test('option 2: should change text after a delay', function(assert) {
  assert.expect(3);

  this.render(hbs`{{delayed-action-button}}`);

  assert.equal(this.$('button').text(), 'Click me');

  let originalRunLater = Em.run.later;
  let laterDefer;
  Em.run.later = function(fn) {
    laterDefer = Em.RSVP.defer();
    laterDefer.promise.then(fn);
  };

  Em.run(() => this.$('button').click());

  assert.equal(this.$('button').text(), '...please wait...');

  Em.run(() => laterDefer.resolve());

  assert.equal(this.$('button').text(), 'Click me again');

  Em.run.later = originalRunLater;

  return wait();
});
