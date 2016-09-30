import Item from 'models/viewModels/itemViewModel';
import db from 'models/data/db';

var itemsModel = (function () {
        function add(name, price, category) {
        var newItem = new Item(name, price, category);
        db.add('Item', newItem);
    }

    function getAll() {
        return db.query('Item').find();
    }

    return {
        add,
        getAll
    };
}());

export default itemsModel;