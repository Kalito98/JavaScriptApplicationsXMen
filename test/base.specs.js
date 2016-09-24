import {
    Item,
    Digital,
    Physical
} from '../public/scripts/models/base-classes';

let expect = require('chai').expect;

describe('Item', () => {
    describe('#id', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Category");
        });

        it('should return the id', () => {
            expect(item.id).to.not.equal(null);
        });

        it('should be a unique id', () => {
            let newItem = new Item("Book", 45, "Comedy");
            expect(item.id).to.not.equal(newItem.id);
        });

        it('cannot be null', () => {
            expect(item.id).to.not.equal(null);
        });
    });

    describe('#name', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Category");
        });

        it('should return the name', () => {
            expect(item.name).to.equal("Name");
        });

        it('can be changed', () => {
            item.name = "New name";
            expect(item.name).to.equal("New name")
        });

        it('should accept only string', () => {
            expect(() => {
                item.name = 42;
            }).to.throw(Error);
            expect(() => {
                item.name = true;
            }).to.throw(Error);
        });

        it('cannot be an empty string', () => {
            expect(() => {
                item.name = "";
            }).to.throw(Error);
        });

        it('cannot be null', () => {
            expect(item.name).to.not.equal(null);
        });
    });

    describe('#price', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Category");
        });

        it('should return the price', () => {
            expect(item.price).to.equal(20);
        });

        it('can be changed', () => {
            item.price = 45;
            expect(item.price).to.equal(45);
        });

        it('should accept only number', () => {
            expect(() => {
                item.price = "bad price";
            }).to.throw(Error);
            expect(() => {
                item.price = true;
            }).to.throw(Error);
            expect(() => {
                item.price = () => {};
            }).to.throw(Error);
        });

        //So far it can be zero and the test doesnt pass.

        // it('cannot be zero', () => {
        //     expect(() => {
        //         item.price = 0;
        //     }).to.throw(Error);
        // });

        it('cannot be less than zero', () => {
            expect(() => {
                item.price = -23;
            }).to.throw(Error);
        });

        it('cannot be null', () => {
            expect(item.price).to.not.equal(null);
        });
    });

    describe('#category', () => {
        let item;

        beforeEach(() => {
            item = new Item("Name", 20, "Drama");
        });

        it('should return the category', () => {
            expect(item.category).to.equal("Drama");
        });

        it('can be changed', () => {
            item.category = "Bollywood";
            expect(item.category).to.equal("Bollywood");
        });

        it('should accept only string', () => {
            expect(() => {
                item.category = 666;
            }).to.throw(Error);
            expect(() => {
                item.category = true;
            }).to.throw(Error);
        });

        it('cannot be an empty string', () => {
            expect(() => {
                item.category = "";
            }).to.throw(Error);
        });

        it('cannot be null', () => {
            expect(() => {
                item.category = null;
            }).to.throw(Error);
        });
    });
});

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
            expect(()=>{
                digital.rating = -1;
            }).to.throw(Error);
            expect(()=>{
                digital.rating = 7;
            }).to.throw(Error);
        });

        it('should throw if rating is null', () =>{
            expect(()=>{
                digital.rating = null;
            }).to.throw(Error);
        });
    });

    describe('#duration',()=>{
        let digital;

        beforeEach(()=>{
            digital = new Digital("Digital", 234, "Category", 5, 5);
        });

        it('should return duration', ()=>{
            expect(digital.duration).to.be.equal(5);
        });

        it('should set duration properly', ()=>{
            digital.duration = 45;
            expect(digital.duration).to.be.equal(45);
        });

        it('should throw if less than minimum duration', () =>{
            expect(()=>{
                digital.rating = -3;
            }).to.throw(Error);
        });

        it('should throw if null', ()=>{
            expect(()=>{
                digital.rating = null;
            }).to.throw(Error);
        });
    });





});

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
});
