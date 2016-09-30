import {
    common
} from '../common.js';

import Magazine from '../../public/models/viewModels/magazineViewModel';

let expect = common.expect;


describe('Magazine', () => {
    describe('#constructor', () => {
        let magazine;

        beforeEach(() => {
            magazine = new Magazine('Fame', 2.35, 'Drama', 'Mixed', 60, "Gossip", true);
        });

        it('should set all properties correctly', () => {
            expect(magazine.name).to.equal('Fame');
            expect(magazine.price).to.equal(2.35);
            expect(magazine.category).to.equal('Drama');
            expect(magazine.author).to.equal('Mixed');
            expect(magazine.pages).to.equal(60);
            expect(magazine.theme).to.equal('Gossip');
            expect(magazine.hasPresent).to.equal(true);
        });
    });

    describe('#theme', () => {
        let magazine;

        beforeEach(() => {
            magazine = new Magazine('Fame', 2.35, 'Drama', 'Mixed', 60, "Gossip", true);
        });

        it('should return theme', () => {
            expect(magazine.theme).to.equal('Gossip');
        });

        it('should set theme properly', () =>{
            magazine.theme = 'new theme';
            expect(magazine.theme).to.equal('new theme');
        });

        it('should throw if theme not a string', () =>{
            expect(()=>{
                magazine.theme = 7;
            }).to.throw(Error);
        });

        it('should throw if theme is null', () =>{
            expect(()=>{
                magazine.theme = null;
            }).to.throw(Error);
        });

        it('should throw if theme is an empty string', () =>{
            expect(()=>{
                magazine.theme = "";
            }).to.throw(Error);
        });
    });

    describe('#has present', () => {
        let magazine;

        beforeEach(() => {
            magazine = new Magazine('Fame', 2.35, 'Drama', 'Mixed', 60, "Gossip", true);
        });

        it('should return if has present', () => {
            expect(magazine.hasPresent).to.equal(true);
        });

        it('should set has present properly', () =>{
            magazine.hasPresent = false;
            expect(magazine.hasPresent).to.equal(false);
        });
    });
});
