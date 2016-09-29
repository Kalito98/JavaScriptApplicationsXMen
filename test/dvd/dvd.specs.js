import {
    common
} from '../common.js';

import {
    DvD
} from '../../public/scripts/models/classes';

let expect = common.expect;

describe('Dvd', () => {
    describe('#constructor', () => {
        let dvd;

        beforeEach(() => {
            dvd = new DvD('Xmen', 2.35, 'Sci-fi', 5, 120, 'A cool movie with valid summary', 2003);
        });

        it('should set all properties correctly', () => {
            expect(dvd.name).to.equal('Xmen');
            expect(dvd.price).to.equal(2.35);
            expect(dvd.category).to.equal('Sci-fi');
            expect(dvd.rating).to.equal(5);
            expect(dvd.duration).to.equal(120);
            expect(dvd.movieSummary).to.equal('A cool movie with valid summary');
            expect(dvd.yearOfPremiere).to.equal(2003);
        });
    });

    describe('#movie summary', () => {
        let dvd;

        beforeEach(() => {
            dvd = new DvD('Xmen', 2.35, 'Sci-fi', 5, 120, 'A cool movie with valid summary', 2003);
        });

        it('should return summary properly', () => {
            expect(dvd.movieSummary).to.be.equal('A cool movie with valid summary');
        });

        it('should set summary properly', () => {
            dvd.movieSummary = 'new summary which is valid';
            expect(dvd.movieSummary).to.be.equal('new summary which is valid');
        });

        it('should throw if summary not a string', () => {
            expect(() => {
                dvd.movieSummary= 23;
            }).to.throw(Error);
        });

        it('should throw if summary is an empty string', () => {
            expect(() => {
                dvd.movieSummary = '';
            }).to.throw(Error);
        });

        it('should throw if summary is null', () => {
            expect(() => {
                dvd.movieSummary = null;
            }).to.throw(Error);
        });

        it('should throw if summary is less than minimum summary lenght', () => {
            expect(() => {
                dvd.movieSummary ='bad sum';
            }).to.throw(Error);
        });
    });

    describe('#year of premiere', () => {
        let dvd;

        beforeEach(() => {
            dvd = new DvD('Xmen', 2.35, 'Sci-fi', 5, 120, 'A cool movie with valid summary', 2003);
        });

        it('should return premiere properly', () => {
            expect(dvd.yearOfPremiere).to.be.equal(2003);
        });

        it('should set premiere properly', () => {
            dvd.yearOfPremiere = 2002;
            expect(dvd.yearOfPremiere).to.be.equal(2002);
        });

        it('should throw if premiere not a number', () => {
            expect(() => {
                dvd.yearOfPremiere= '345';
            }).to.throw(Error);
        });

        it('should throw if summary is null', () => {
            expect(() => {
                dvd.yearOfPremiere = null;
            }).to.throw(Error);
        });
    });
});
