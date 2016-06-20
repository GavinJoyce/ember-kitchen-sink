import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spikes/outer-component', 'Integration | Component | outer-component', {
  integration: true
});

function getChildComponentsByType(component, componentPath) {
  return component.childViews.filter((child) => {
    let parts = child._debugContainerKey.split('component:');
    return parts[1] === componentPath;
  });
}

test('todo', function(assert) {
  this.render(hbs`{{spikes/outer-component}}`);

  let id = this.$(':first').attr('id');
  let views = this.container.cache['-view-registry:main'];
  let component = views[id];

  assert.equal(component.get('count'), 142857);
  assert.equal(component.childViews[0].get('doubled'), 285714);

  let children = getChildComponentsByType(component, 'spikes/inner-component');
  assert.equal(children[1].get('doubled'), 285714);
});
