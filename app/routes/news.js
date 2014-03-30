import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	templateName:'section',

	model: function(params) {
		return getJSON(window._apiurl +'/entriesbysection?section=news');
	}

});
