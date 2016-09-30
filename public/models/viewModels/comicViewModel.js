import { validator } from '../utils/validations';
import Physical from './physicalViewModel';

class Comic extends Physical {
    constructor(name, price, category, author, pages, superheroName, publisher) {
        super(name, price, category, author, pages);

        this.superheroName = superheroName;
        this.publisher = publisher;
    }

    get superheroName() {
        return this._superheroName;
    }

    set superheroName(superheroName) {
        validator.validateName(superheroName);

        this._superheroName = superheroName;
    }

    get publisher() {
        return this._publisher;
    }

    set publisher(publisher) {
        validator.validatePublisher(publisher);

        this._publisher = publisher;
    }
}

export default Comic;