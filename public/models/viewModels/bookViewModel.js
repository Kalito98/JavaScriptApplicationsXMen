import { validator } from '../utils/validations';
import Physical from './physicalViewModel';

class Book extends Physical {
    constructor(name, price, category, author, pages, cover, summary) {
        super(name, price, category, author, pages);

        this.cover = cover;
        this.summary = summary;
    }

    get cover() {
        return this._cover;
    }

    set cover(cover) {
        validator.validateCover(cover);

        this._cover = cover;
    }

    get summary() {
        return this._summary;
    }

    set summary(summary) {
        validator.validateSummary(summary);

        this._summary = summary;
    }
}

export default Book;