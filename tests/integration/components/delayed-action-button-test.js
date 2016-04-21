import Em from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delayed-action-button', 'Integration | Component | delayed action button', {
  integration: true
});

test('should change text after a delay', function(assert) {
  assert.expect(3);

  this.render(hbs`{{delayed-action-button}}`);

  assert.equal(this.$('button').text(), 'Click me');

  Em.run(() => {
    this.$('button').click();
  });

  assert.equal(this.$('button').text(), '...please wait...');

  Em.run.later(() => {
    assert.equal(this.$('button').text(), 'Click me again');
  }, 1050);

  return wait();
});
