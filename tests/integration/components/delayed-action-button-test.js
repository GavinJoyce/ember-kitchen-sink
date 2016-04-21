import Em from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

function mockRunLater(context) {
  context.mockRunLater = { //TODO: GJ: naming
    originalRunLater: Em.run.later,
    defferedRunLaters: [],
    next: function() {
      Em.run(() => {
        let defered = context.mockRunLater.defferedRunLaters.splice(0, 1)[0];

        if(defered) {
          defered.resolve();
        } else {
          throw "there are no more defered run laters";
        }
      });
    }
  };

  Em.run.later = function(fn) {
    let defer = Em.RSVP.defer();
    defer.promise.then(fn);
    context.mockRunLater.defferedRunLaters.push(defer);
  };
}

function restoreRunLater(context) {
  Em.run.later = context.mockRunLater.originalRunLater;
}

moduleForComponent('delayed-action-button', 'Integration | Component | delayed action button', {
  integration: true
});

//this test mocks `Em.run.later`
test('option 2: should change text after a delay', function(assert) {
  mockRunLater(this);

  assert.expect(4);

  this.render(hbs`{{delayed-action-button}}`);

  assert.equal(this.$('button').text(), 'Click me');

  Em.run(() => this.$('button').click());

  assert.equal(this.$('button').text(), '...please wait...');

  this.mockRunLater.next();

  assert.equal(this.$('button').text(), '...continue to wait...');

  this.mockRunLater.next();

  assert.equal(this.$('button').text(), 'Click me again');

  restoreRunLater(this);
});


//this is brittle and slow, don't use it. It uses a longer `Em.run.later`
// test('option 1: should change text after a delay', function(assert) {
//   assert.expect(4);
//
//   this.render(hbs`{{delayed-action-button}}`);
//
//   assert.equal(this.$('button').text(), 'Click me');
//
//   Em.run(() => this.$('button').click());
//
//   assert.equal(this.$('button').text(), '...please wait...');
//
//   Em.run.later(() => {
//     assert.equal(this.$('button').text(), '...continue to wait...');
//   }, 1050);
//
//   Em.run.later(() => {
//     assert.equal(this.$('button').text(), 'Click me again');
//   }, 2050);
//
//   return wait();
// });
