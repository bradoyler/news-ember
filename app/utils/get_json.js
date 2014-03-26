// a generic wrapper for getting json 

function getJSON(url, params) {
  var args = {
    url: url,
    dataType: 'json'
  };

  return new Ember.RSVP.Promise(function(resolve, reject) {
    console.log('RSVP');
    $.ajax(args)
      .fail(function(xhr, status) {
        console.log('ajax fail()', status);
        // xhr.then = null;
        // Ember.run(null, reject, xhr);
        return null;
      })
      .done(function(json, status, xhr) {
        console.log('done:', status);
        if (json.error) {
          // avoid issue with successfully resolved xhr promise causing rejection to fail
          xhr.then = null;
          Ember.run(null, reject, xhr);
        } else {
          console.log('## ajax', args.url);
          Ember.run(null, resolve, json);
        }
      }, function(xhr) {
        Ember.run(null, reject, xhr);
      });
  });
}
export default getJSON;