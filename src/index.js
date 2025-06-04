import './index.css';

export class Ship {
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
        this.coordToShip = new Map();
    };

    transCoordinates(str) {
        //translates the input string to match the gameboard index format;
        const al = 'ABCDEFGHIJ';
        const x = al.indexOf(str.charAt(0).toUpperCase());
        const y = parseInt(str.slice(1)) - 1;
        return [x, y];
    }

    tryPlaceShip(str) {
        //driver script to place a ship
        if (!this.validateInput(str)) return false;

        const coords = this.getPlacementCoordinates(str);
        if (!this.areCoordsFree(coords)) return false;

        const surrounding = this.getAllSurroundingCoordinates(coords);
        if (!this.areCoordsFree(surrounding)) return false;

        this.placeShipOnBoard(str);
        this.addToShipMap(coords);
        return true;
    }

    addToShipMap(coords) {
        const len = coords.length;
        const ship = new Ship(len);
        for (const [x, y] of coords) {
            this.coordToShip.set(`${x},${y}`, ship);
        }
    }

    areCoordsFree(coords) {
        for (const [x, y] of coords) {
            if (this.board[x][y] === 's') {
                return false;
            }
        }
        return true;
    }

    validateInput(str) {
        //checks the input string can be placed on the gameboard
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

    getPlacementCoordinates(str) {
        //returns all coordinates for a ship placement in a 2-Dimensional Array e.g. [[0,1],[0,2],[0,3]]
        // Single cell, e.g. "C10"
        if (!str.includes("-")) {
            const [x, y] = this.transCoordinates(str);
            return [[x, y]];
        }
        // Range input, e.g. "C5-C8"
        const [from, to] = str.split("-");
        const [x1, y1] = this.transCoordinates(from);
        const [x2, y2] = this.transCoordinates(to);

        if (x1 === x2) {
            const affectedCoordinates = this.getAllAffectedCoordinates(y1, y2);
            return affectedCoordinates.map(z => [x1, z]);
        } else if (y1 === y2) {
            const affectedCoordinates = this.getAllAffectedCoordinates(x1, x2);
            return affectedCoordinates.map(z => [z, y1]);
        } else {
            throw new Error("Nur horizontale oder vertikale Platzierungen erlaubt.");
        }
    }

    getAllAffectedCoordinates(start, end) {
        //returns the range of the coordinates as an array
        const min = Math.min(start, end);
        const max = Math.max(start, end);
        return Array.from({ length: max - min + 1 }, (_, i) => min + i);
    }

    getAllSurroundingCoordinates(coords) {
        const surrounding = []
        const offsets = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];
        for (const [x, y] of coords) {
            for (const [dx, dy] of offsets) {
                const nx = x + dx;
                const ny = y + dx;
                const key = `${nx},${ny}`;
                if (this.isWithinBoard([nx, ny])) {
                    surrounding.push([nx, ny]);
                }
            };
        };
        const unique = [];
        const seen = new Set();

        for (const coord of surrounding) {
            const key = coord.toString();
            if (!seen.has(key)) {
                seen.add(key);
                unique.push(coord);
            }
        }

        return unique;
    }


    isWithinBoard([x, y]) {
        return x >= 0 && x < 10 && y >= 0 && y < 10;
    }


    placeShipOnBoard(str) {
        //check if ship has length 1
        if (str.split("-").length === 1) {
            const [x, y] = this.transCoordinates(str);
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

    receiveAttack(coords) {
        if (!this.validateInput(coords)) {
            throw new Error('Invalid coordinates.');
        }
        const [x, y] = this.transCoordinates(coords);
        const attackedPos = this.board[x][y];
        if (attackedPos === '-') {
            this.board[x][y] = 'x';
            return 'miss';
        } else if (attackedPos === 'x' || attackedPos === 'o') {
            return 'repeat';
        } else if (attackedPos === 's') {
            this.board[x][y] = 'o';
            this.receiveShipHit(x, y);
            return 'hit';
        };
    };

    receiveShipHit(x, y) {
        const ship = this.coordToShip.get(`${x},${y}`);
        ship.hit();
    };

    isGameOver() {
        const uniqueShips = new Set(this.coordToShip.values());
        for (const ship of uniqueShips) {
            if (!ship.isSunk()) {
                return false;
            };
        };
        return true;
    };
}