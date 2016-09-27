import { validator } from '../utils/validations';
import Physical from './physicalViewModel';

class Magazine extends Physical {
    constructor(name, price, category, author, pages, theme, hasPresent) {
        super(name, price, category, author, pages);

        this.theme = theme;
        this.hasPresent = hasPresent;
    }

    get theme() {
        return this._theme;
    }

    set theme(theme) {
        validator.validateTheme(theme);

        this._theme = theme;
    }

    get hasPresent() {
        return this._hasPresent;
    }

    set hasPresent(hasPresent) {
        this._hasPresent = hasPresent;
    }
}

export default Magazine;