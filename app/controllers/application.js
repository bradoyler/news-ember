var ApplicationController = Ember.ObjectController.extend({
	actions: {
		toggleMenu: function() {
			 $('.navbar-nav').slideToggle();
		}
	}
});

export default ApplicationController;