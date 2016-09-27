import Physical from 'public/models/viewModels/physicalViewModel';
import db from 'public/models/data/db';

var physicalsModel = (function () {
        function add(name, price, category, author, pages) {
        var newPhysical = new Physical(name, price, category, author, pages);
        db.add('Physical', newPhysical);
    }

    function getAll() {
        return db.query('Physical').find();
    }

    return {
        add,
        getAll
    };
}());

export default physicalsModel;