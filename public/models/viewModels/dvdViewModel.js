import { validator } from '../utils/validations';
import Digital from './digitalViewModel';

class DvD extends Digital {
    constructor(name, price, category, rating, duration, movieSummary, yearOfPremiere) {
        super(name, price, category, rating, duration);

        this.movieSummary = movieSummary;
        this.yearOfPremiere = yearOfPremiere;
    }

    get movieSummary() {
        return this._movieSummary;
    }

    set movieSummary(movieSummary) {
        validator.validateSummary(movieSummary);

        this._movieSummary = movieSummary;
    }

    get yearOfPremiere() {
        return this._yearOfPremiere;
    }

    set yearOfPremiere(yearOfPremiere) {
        validator.validateYear(yearOfPremiere);

        this._yearOfPremiere = value;
    }
}

export default DvD;