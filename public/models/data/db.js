import appConfig from 'config/appConfig';
import 'parse';

Parse.initialize(appConfig.parseConfig.applicationId, appConfig.parseConfig.javaScriptKey);

var db = (function () {
    function add(dataClass, dataObject) {
        var DataClass = Parse.Object.extend(dataClass);
        var data = new DataClass();

        data.save(dataObject);
    }

    function getById(dataClass, id) {
        var query = new Parse.Query(dataClass);
        return query.get(id);
    }

    function query(dataClass) {
        return new Parse.Query(dataClass);
    }

    return {
        add,
        getById,
        query
    };
}());

export default db;