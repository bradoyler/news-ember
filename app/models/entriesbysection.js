var Entriesbysection = DS.Model.extend({
	externalId: DS.attr('string'),
	headline : DS.attr('string'),
	summary : DS.attr('string'),
	main_art : DS.attr(),
	bylines : DS.attr(),
	last_published_utc: DS.attr('date'),
    canonical_url: DS.attr('string')
});

//Entriesbysection.idField = 'externalId';

export default Entriesbysection;