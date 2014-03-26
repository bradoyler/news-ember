import getJSON from 'appkit/utils/get_json';

export default Ember.Route.extend({

	renderTemplate: function() {
      this.render('section');
    },

	model: function() {
		return getJSON('/1.0/entriesbysection?section=politics');
	}
});
