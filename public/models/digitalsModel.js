import Digital from 'public/models/viewModels/digitalViewModel';
import db from 'public/models/data/db';

var digitalsModel = (function () {
    function add(name, price, category, rating, duration) {
        var newDigital = new Digital(name, price, category, rating, duration);
        db.add('Digital', newDigital);
    }

    function getAll() {
        return db.query('Digital').find();
    }

    return {
        add,
        getAll
    };
}());

export default digitalsModel;