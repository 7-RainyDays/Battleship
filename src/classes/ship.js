export default class Ship {
    constructor(len) {

        this.len = len;
        this.hitCount = 0;
        this.sunk = false;
    };

    hit() {
        this.hitCount += 1;
        this.isSunk();
    };

    isSunk() {
        return this.hitCount >= this.len;
    };
};