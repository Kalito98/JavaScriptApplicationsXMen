import Cd from 'public/models/viewModels/cdViewModel';
import db from 'public/models/data/db';

var cdsModel = (function () {
        function add(name, price, category, rating, duration, songs, songsCount) {
        var newCd = new Cd(name, price, category, rating, duration, songs, songsCount);
        db.add('Cd', newCd);
    }

    function getAll() {
        return db.query('Cd').find();
    }

    return {
        add,
        getAll
    };
}());

export default cdsModel;