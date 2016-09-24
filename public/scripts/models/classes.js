import { validator } from '../utils/validations';
import { Physical, Digital } from './base-classes';

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

class Cd extends Digital {
    constructor(name, price, category, rating, duration, songs, songsCount) {
        super(name, price, category, rating, duration);

        this.songs = songs;
        this.songsCount = songsCount;
    }

    get songs() {
        return this._songs;
    }

    set songs(songs) {
        this._songs = songs;
    }

    get songsCount() {
        return this._songsCount;
    }

    set songsCount(songsCount) {
        this._songsCount = songsCount;
    }
}

export {
    Book,
    Magazine,
    Comic,
    DvD,
    Cd
};