import Book from 'models/viewModels/bookViewModel';
import db from 'models/data/db';

var booksModel = (function () {
        function add(name, price, category, author, pages, cover, summary) {
        var newBook = new Book(name, price, category, author, pages, cover, summary);
        db.add('Book', newBook);
    }

    function getAll() {
        return db.query('Book').find();
    }

    return {
        add,
        getAll
    };
}());

export default booksModel;