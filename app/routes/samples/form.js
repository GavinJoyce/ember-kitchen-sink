import Em from 'ember';

export default Em.Route.extend({
  model() {
    return {
      token: 'aaa:bbb:ccc'
    };
  }
});
