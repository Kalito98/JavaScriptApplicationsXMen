import {
    common
} from '../common.js';

import Book from '../../public/models/viewModels/bookViewModel';

let expect = common.expect;

describe('Book', () => {
    let book;

    beforeEach(() => {
        book = new Book('Zoro', 22.5, 'Drama', 'Undefined', 345, 'Soft', 'Very intense drama');
    });

    describe('#constructor', () => {
        it('should set proper values', () => {
            expect(book.name).to.equal('Zoro');
            expect(book.price).to.equal(22.5);
            expect(book.category).to.equal('Drama');
            expect(book.author).to.equal('Undefined');
            expect(book.pages).to.equal(345);
            expect(book.cover).to.equal('soft');
            expect(book.summary).to.equal('Very intense drama');
        });
    });

    describe('#cover', () => {
        it('should return cover', () =>{
            expect(book.cover).to.equal('soft');
        });

        it('should set proper cover', () => {
            book.cover = 'HaRd';
            expect(book.cover).to.equal('hard');
        });

        it('should throw if cover not soft or hard', () =>{
            expect(() =>{
                book.cover  = "Not soft or hard";
            }).to.throw(Error);
        });
    });

    describe('#summary', () => {
        it('should return summary', () =>{
            expect(book.summary).to.equal('Very intense drama');
        });

        it('should set proper summary', () => {
            book.summary = 'This is a valid summary';
            expect(book.summary).to.equal('This is a valid summary');
        });

        it('should throw if summary not a string', () =>{
            expect(() =>{
                book.summary  = 7;
            }).to.throw(Error);
        });

        it('should throw if summary is less than minimal summary length', () =>{
            expect(() =>{
                book.summary  = "Invalid";
            }).to.throw(Error);
        });
    });
});
