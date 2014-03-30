import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	model: function(params) {
		return getJSON(window._apiurl +'/entrybyid?articleId=NewsCms%2Fentry%2F'+ params.externalId);
	}
});
