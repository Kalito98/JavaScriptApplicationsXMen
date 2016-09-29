import {
    common
} from '../common.js';

import {
    Comic
} from '../../public/scripts/models/classes';

let expect = common.expect;

describe('Comic', () => {
    describe('#constructor', () => {
        let comic;

        beforeEach(() => {
            comic = new Comic('Xmen', 2.35, 'Sci-fi', 'Ivan', 60, 'Blackpool', 'Marvel');
        });

        it('should set all properties correctly', () => {
            expect(comic.name).to.equal('Xmen');
            expect(comic.price).to.equal(2.35);
            expect(comic.category).to.equal('Sci-fi');
            expect(comic.author).to.equal('Ivan');
            expect(comic.pages).to.equal(60);
            expect(comic.superheroName).to.equal('Blackpool');
            expect(comic.publisher).to.equal('Marvel');
        });
    });

    describe('#superheroName', () => {
        let comic;

        beforeEach(() => {
            comic = new Comic('Xmen', 2.35, 'Sci-fi', 'Ivan', 60, 'Blackpool', 'Marvel');
        });

        it('should return superheroName correctly', () => {
            expect(comic.superheroName).to.equal('Blackpool');
        });

        it('should set superheroName correctly', () => {
            comic.superheroName = 'Batman';
            expect(comic.superheroName).to.equal('Batman');
        });

        it('should throw if superheroName is not a string', () => {
            expect(() => {
                comic.superheroName = 7;
            }).to.throw(Error);
        });

        it('should throw if superheroName is an empty string', () => {
            expect(() => {
                comic.superheroName = '';
            }).to.throw(Error);
        });

        it('should throw if superheroName is null', () => {
            expect(() => {
                comic.superheroName = null;
            }).to.throw(Error);
        });
    });

    describe('#superheroName', () => {
        let comic;

        beforeEach(() => {
            comic = new Comic('Xmen', 2.35, 'Sci-fi', 'Ivan', 60, 'Blackpool', 'Marvel');
        });

        it('should return publisher correctly', () => {
            expect(comic.publisher).to.equal('Marvel');
        });

        it('should set publisher correctly', () => {
            comic.publisher = 'DMC';
            expect(comic.publisher).to.equal('DMC');
        });

        it('should throw if superheroName is not a string', () => {
            expect(() => {
                comic.publisher = 7;
            }).to.throw(Error);
        });

        it('should throw if superheroName is an empty string', () => {
            expect(() => {
                comic.publisher = '';
            }).to.throw(Error);
        });

        it('should throw if superheroName is null', () => {
            expect(() => {
                comic.publisher = null;
            }).to.throw(Error);
        });
    });
});
