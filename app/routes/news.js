import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	templateName:'section',

	model: function(params) {
		return getJSON('/1.0/entriesbysection?section=news');
	}

});
