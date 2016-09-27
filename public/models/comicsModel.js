import Comic from 'public/models/viewModels/comicViewModel';
import db from 'public/models/data/db';

var comicsModel = (function () {
        function add(name, price, category, author, pages, superheroName, publisher) {
        var newComic = new Comic(name, price, category, author, pages, superheroName, publisher);
        db.add('Comic', newComic);
    }

    function getAll() {
        return db.query('Comic').find();
    }

    return {
        add,
        getAll
    };
}());

export default comicsModel;