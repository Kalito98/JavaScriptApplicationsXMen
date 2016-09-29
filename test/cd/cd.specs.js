import {
    common
} from '../common.js';

import {
    Cd
} from '../../public/scripts/models/classes';

let expect = common.expect;

describe('CD', () => {
    describe('#constructor', () => {
        let cd;

        beforeEach(() => {
            cd = new Cd('Toni Storaro', 2.35, 'Selsko', 2, 60, "Pesni", 8);
        });

        it('should set all properties correctly', () => {
            expect(cd.name).to.equal('Toni Storaro');
            expect(cd.price).to.equal(2.35);
            expect(cd.category).to.equal('Selsko');
            expect(cd.rating).to.equal(2);
            expect(cd.duration).to.equal(60);
            expect(cd.songs).to.equal('Pesni');
            expect(cd.songsCount).to.equal(8);
        });
    });

    describe('#songs', () => {
        let cd;

        beforeEach(() => {
            cd = new Cd('Toni Storaro', 2.35, 'Selsko', 2, 60, "Pesni", 8);
        });

        it('should return songs', () => {
            expect(cd.songs).to.equal('Pesni');
        });

        it('should set songs properly', () =>{
            cd.songs = 'new songs';
            expect(cd.songs).to.equal('new songs');
        });
    });

    describe('#songs count', () => {
        let cd;

        beforeEach(() => {
            cd = new Cd('Toni Storaro', 2.35, 'Selsko', 2, 60, "Pesni", 8);
        });

        it('should return songs', () => {
            expect(cd.songsCount).to.equal(8);
        });

        it('should set songs properly', () =>{
            cd.songsCount = 25;
            expect(cd.songsCount).to.equal(25);
        });
    });

});
