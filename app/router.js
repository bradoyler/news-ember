var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });

  this.resource('news');
  this.resource('politics');
  this.resource('health');
  this.resource('tech');
  this.resource('business');
  this.resource('popculture');
  this.resource('science');
  this.resource('article', {path: 'article/:externalId'});

});

export default Router;
