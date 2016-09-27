import { idGenerator } from '../utils/data-generator';
import { validator } from '../utils/validations';

import Item from './itemViewModel';

class Digital extends Item {
    constructor(name, price, category, rating, duration) {
        super(name, price, category);

        this.rating = rating;
        this.duration = duration;
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
export default Digital;