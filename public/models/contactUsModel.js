import Contact from 'models/viewModels/contactUsViewModel';
import db from 'models/data/db';

var contactUsModel = (function () {
    function add(name, githubprofil) {
        var newContact = new Contact(name, githubprofil);
        db.add('Contact', newContact);
    }

    function getById(id) {
        return db.getById('Contact', id);
    }

    function getAll() {
        return db.query('Contact').find();
    }

    return {
        add,
        getById,
        getAll
    };
}());

export default contactUsModel;