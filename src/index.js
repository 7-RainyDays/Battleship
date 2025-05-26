export class Ship {
    constructor(len) {
        this.len = len;
        this.hitCount = 0;
        this.sunk = false;
    };

    hit() {
        this.hitCount += 1;
    };

    isSunk() {
        return this.hitCount >= this.len;
    };
};


export class Gameboard {
    constructor() {
        this.board = [
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        this.ships = [];
    };

    transCoordinates(str) {
        const al = 'ABCDEFGHIJ';
        const x = al.indexOf(str.charAt(0).toUpperCase());
        const y = parseInt(str.slice(1)) - 1;
        return [x, y];
    }

    placeShip(str) {
        //check if ship has length 1
        if (str.split("-").length === 1) {
            const place = this.transCoordinates(str);
            const x = place[0];
            const y = place[1];
            this.board[x][y] = 's';
            return;
        };

        const line = str.split("-");
        const [x1, y1] = this.transCoordinates(line[0]);
        const [x2, y2] = this.transCoordinates(line[1]);

        if (x1 === x2) {
            //horizontal ship
            for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
                this.board[x1][y] = 's';
            };
        } else if (y1 === y2) {
            //vertical ship
            for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
                this.board[x][y1] = 's';
            };
        } else {
            throw new Error("Nur horizontale oder vertikale Platzierungen erlaubt.");
        };
    };
};
