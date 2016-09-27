import { validator } from '../utils/validations';
import Digital from './digitalViewModel';

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

export default Cd;

