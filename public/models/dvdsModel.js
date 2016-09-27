import Dvd from 'public/models/viewModels/dvdViewModel';
import db from 'public/models/data/db';

var dvdsModel = (function () {
        function add(name, price, category, rating, duration, movieSummary, yearOfPremiere) {
        var newDvd = new Dvd(name, price, category, rating, duration, movieSummary, yearOfPremiere);
        db.add('Dvd', newDvd);
    }

    function getAll() {
        return db.query('Dvd').find();
    }

    return {
        add,
        getAll
    };
}());

export default dvdsModel;