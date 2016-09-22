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

class Digital extends Item {
    constructor(name, price, category, rating, duration) {
        super(name, price, category);

        this.rating=rating;
        this.duration=duration;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        validator.validateRating(value);

        this._rating = value;
    }

    get duration() {
        return this._duration;
    }

    set duration(value) {
        validator.validateDuration(value);

        this._duration = value;
    }
}
