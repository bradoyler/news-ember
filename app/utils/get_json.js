// a generic wrapper for getting json 

function getJSON(url, params) {
  var args = {
    url: url,
    dataType: 'json'
  };

  return new Ember.RSVP.Promise(function(resolve, reject) {
    $.ajax(args)
      .fail(function(xhr, status) {
        // xhr.then = null;
        // Ember.run(null, reject, xhr);
        return null;
      })
      .done(function(json, status, xhr) {
        if (json.error) {
          // avoid issue with successfully resolved xhr promise causing rejection to fail
          xhr.then = null;
          Ember.run(null, reject, xhr);
        } else {
          Ember.run(null, resolve, json);
        }
      }, function(xhr) {
        Ember.run(null, reject, xhr);
      });
  });
}
export default getJSON;