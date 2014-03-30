export
default Ember.Component.extend({
	tagName: 'img',
	classNames: ['panel-img-lede'],
	attributeBindings: ['src', 'alt'],
	src: function() {
		var imgurl = this.get('imgurl') ||'';
		imgurl = imgurl.replace('/i/', '/j/').replace('.jpg', '.nbcnews-fp-520-240.jpg');

		return imgurl;
	}.property('name')
});
