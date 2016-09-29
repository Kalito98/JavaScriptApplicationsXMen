import {
    common
} from '../common.js';
let expect = common.expect;

import {
    Digital
} from '../../public/scripts/models/base-classes';

describe('Digital', () => {
    let digital;

    describe('#rating', () => {
        beforeEach(() => {
            digital = new Digital("Digital", 234, "Category", 5, 5);
        });

        it('should return the rating', () => {
            expect(digital.rating).to.be.equal(5);
        });

        it('should set rating properly', () => {
            digital.rating = 3.5;
            expect(digital.rating).to.be.equal(3.5);
        });

        it('should throw if not a number', () => {
            expect(() => {
                digital.rating = "Bad rating";
            }).to.throw(Error);
        });

        it('should throw if not a valid rating', () => {
            expect(() => {
                digital.rating = -1;
            }).to.throw(Error);
            expect(() => {
                digital.rating = 7;
            }).to.throw(Error);
        });

        it('should throw if rating is null', () => {
            expect(() => {
                digital.rating = null;
            }).to.throw(Error);
        });
    });

    describe('#duration', () => {
        let digital;

        beforeEach(() => {
            digital = new Digital("Digital", 234, "Category", 5, 5);
        });

        it('should return duration', () => {
            expect(digital.duration).to.be.equal(5);
        });

        it('should set duration properly', () => {
            digital.duration = 45;
            expect(digital.duration).to.be.equal(45);
        });

        it('should throw if less than minimum duration', () => {
            expect(() => {
                digital.rating = -3;
            }).to.throw(Error);
        });

        it('should throw if null', () => {
            expect(() => {
                digital.rating = null;
            }).to.throw(Error);
        });
    });
});
