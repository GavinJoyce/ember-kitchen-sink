import Em from 'ember';

export default Em.Component.extend({
 count: 142857,

 init() {
   this._super(...arguments);
   console.log('outer');
 },

 actions: {
   increment() {
     this.incrementProperty('count');
   }
 }
});
