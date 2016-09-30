import { common } from '../common.js';

import Physical from '../../public/models/viewModels/physicalViewModel';

let expect = common.expect;

describe('Physical',() =>{
    describe('#author', () =>{
        let physical;

        beforeEach(() =>{
            physical = new Physical("namename", 34, "Category", "Author", 34);
        });

        it('should return author properly',()=>{
            expect(physical.author).to.be.equal("Author");
        });

        it('should set author properly', () => {
            physical.author = "new-author";
            expect(physical.author).to.be.equal("new-author");
        });

        it('should throw if author not a string', () =>{
            expect(() =>{
                physical.author = 23;
            }).to.throw(Error);
        });

        it('should throw if author is an empty string', () =>{
            expect(()=>{
                physical.author = "";
            }).to.throw(Error);
        });

        it('should throw if author is null', () => {
            expect(()=>{
                physical.author = null;
            }).to.throw(Error);
        });
    });

    describe('#pages', ()=>{
        let physical;

        beforeEach(() =>{
            physical = new Physical("namename", 34, "Category", "Author", 34);
        });

        it('should return pages properly',()=>{
            expect(physical.pages).to.be.equal(34);
        });

        it('should set pages properly', () => {
            physical.pages = 666;
            expect(physical.pages).to.be.equal(666);
        });

        it('should throw if pages not a number', () =>{
            expect(() =>{
                physical.pages = "666";
            }).to.throw(Error);
        });
    });
});
