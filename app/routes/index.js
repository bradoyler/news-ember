import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	model: function() {
		 return getJSON('/1.0/entriesbysection?section=news');
	}
});
