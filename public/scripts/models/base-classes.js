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

class Physical extends Item {
    constructor(name, price, category, author, pages) {
        super(name, price, category);

        this.author = author;
        this.pages = pages;
    }

    get author() {
        return this._name;
    }

    set author(author) {
        this._author = author;
    }

    get pages() {
        return this._pages;
    }

    set pages(pages) {
        this._pages = pages;
    }
}

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
        this._cover = cover;
    }

    get summary() {
        return this._summary;
    }

    set summary(summary) {
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
        this._superheroName = superheroName;
    }

    get publisher() {
        return this._publisher;
    }

    set publisher(publisher) {
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
        this._movieSummary = movieSummary;
    }

    get yearOfPremiere() {
        return this._yearOfPremiere;
    }

    set yearOfPremiere(yearOfPremiere) {
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