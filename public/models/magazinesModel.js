import Magazine from 'models/viewModels/magazineViewModel';
import db from 'models/data/db';

var MagazinesModel = (function () {
        function add(name, price, category, author, pages, theme, hasPresent) {
        var newMagazine = new Magazine(name, price, category, author, pages, theme, hasPresent);
        db.add('Magazine', newMagazine);
    }

    function getAll() {
        return db.query('Magazine').find();
    }

    return {
        add,
        getAll
    };
}());

export default MagazinesModel;