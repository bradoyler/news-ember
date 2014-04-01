export
default Ember.Component.extend({
	tagName: 'img',
	classNames: ['panel-img-lede'],
	attributeBindings: ['src', 'alt'],
	src: function() {
		var width= this.get('width') || '520';
		var height= this.get('height') || '240';
		var imgurl = this.get('imgurl') ||'';

		imgurl = imgurl.replace('/i/', '/j/').replace('.jpg', '.nbcnews-fp-'+width+'-'+ height +'.jpg')
		.replace('.png', '.nbcnews-fp-'+width+'-'+ height +'.png');
		return imgurl;
	}.property('name')
});
