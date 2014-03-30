import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	model: function() {
		return getJSON(window._apiurl +'/entriesbysection?section=news');
	}
});
