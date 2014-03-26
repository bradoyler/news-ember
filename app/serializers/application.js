
var ApplicationSerializer = DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        // payload.results.forEach(function(element, key){
        // 	console.log('$$ element', element);
        //    // element.id = element[type.idField];
        // });
        
        var newPayload = {};
        newPayload[type.typeKey] = payload.results;
        return this._super(store, type, newPayload, id, requestType);
    }
});

export default ApplicationSerializer;