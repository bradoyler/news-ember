export default DS.FixtureAdapter.extend();

var ApplicationAdapter = DS.RESTAdapter.extend({
			namespace: '1.0',
			readOnly: true
});

Ember.Inflector.inflector.irregular('entriesbysection', 'entriesbysection');

// App.ArrayTransform = DS.RESTAdapter.registerTransform('array', {
//   serialize: function(value) {
//     if (Em.typeOf(value) === 'array') {
//       return value;
//     } else {
//       return [];
//     }
//   },
//   deserialize: function(value) {
//     return value;
//   }
// });

export default ApplicationAdapter;