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

    validateInput(str) {
        const single = /^[A-J](10|[1-9])$/;
        const range = /^[A-J](10|[1-9])-[A-J](10|[1-9])$/;

        if (!(single.test(str) || range.test(str))) return false;

        if (range.test(str)) {
            const [from, to] = str.split("-");
            const [x1, y1] = this.transCoordinates(from);
            const [x2, y2] = this.transCoordinates(to);

            const isStraight = x1 === x2 || y1 === y2;
            const inBounds = [x1, x2, y1, y2].every((val) => val >= 0 && val < 10);
            const maxLength = Math.abs(x1 - x2) <= 5 && Math.abs(y1 - y2) <= 5;
            return isStraight && inBounds && maxLength;
        }

        // single field
        const [x, y] = this.transCoordinates(str);
        return x >= 0 && x < 10 && y >= 0 && y < 10;
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
            const [x, y] = this.transCoordinates(str);
            this.board[x][y] = 's';
            this.ships.push(new Ship(1));
            return;
        };

        const line = str.split("-");
        const [x1, y1] = this.transCoordinates(line[0]);
        const [x2, y2] = this.transCoordinates(line[1]);

        if (x1 === x2) {
            //horizontal ship
            for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
                this.board[x1][y] = 's';
                const newShip = new Ship(Math.abs(y1, y2) + 1);
                this.ships.push(newShip);
            };
        } else if (y1 === y2) {
            //vertical ship
            for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
                this.board[x][y1] = 's';
                const newShip = new Ship(Math.abs((x1 - x2) + 1));
                this.ships.push(newShip);
            };
        } else {
            throw new Error("Nur horizontale oder vertikale Platzierungen erlaubt.");
        };
    };
};
