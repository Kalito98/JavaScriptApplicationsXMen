import { idGenerator } from '../utils/data-generator';
import { validator } from '../utils/validations';

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
        validator.validateName(value);

        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        validator.validatePrice(value);

        this._price = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        validator.validateCategory(value);

        this._category = value;
    }
}