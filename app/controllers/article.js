var ArticleController = Ember.ObjectController.extend({
	//content: [],
	firstArticle: Ember.computed.alias('results.firstObject'),
	isSpread: Ember.computed.equal('firstArticle.type', 'spread'),
	isPost: Ember.computed.equal('firstArticle.type', 'post'),
	isVideo: Ember.computed.equal('firstArticle.type', 'video'),
	isExternalLink: Ember.computed.equal('firstArticle.type', 'externallink'),
});

export default ArticleController;