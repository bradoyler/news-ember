import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	templateName:'section',

	model: function() {
		return getJSON(window._apiurl +'/entriesbysection?section=science');
	}
});
