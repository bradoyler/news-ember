import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	model: function(params) {
		return getJSON('/1.0/entrybyid?articleId=NewsCms%2Fentry%2F'+ params.externalId);
	}
});
