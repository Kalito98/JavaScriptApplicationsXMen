import { idGenerator } from '../utils/data-generator';
import { validator } from '../utils/validations';

import Item from './itemViewModel';

class Physical extends Item {
    constructor(name, price, category, author, pages) {
        super(name, price, category);

        this.author = author;
        this.pages = pages;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        validator.validateAuthor(author);

        this._author = author;
    }

    get pages() {
        return this._pages;
    }

    set pages(pages) {
        validator.validatePage(pages);

        this._pages = pages;
    }
}



export default Physical;