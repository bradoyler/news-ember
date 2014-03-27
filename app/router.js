var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });

  this.route('news');
  this.route('politics');
  this.route('health');
  this.route('tech');
  this.route('business');
  this.route('pop-culture');
  this.route('article');

});

export default Router;
