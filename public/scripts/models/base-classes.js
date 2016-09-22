import { idGenerator } from '../utils/data-generator';

class Item {
    constructor(name, price, category) {
        this.id = idGenerator.next().value;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }
}