import { transCoordinates, validateInput, coordsToNotation, getRandomInt } from "../utility/utils";
import Ship from "./ship";

export default class Gameboard {
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
        this.CELL_TYPES = {
            SHIP: 's',
            HIT: 'o',
            MISS: 'x',
            WATER: '-'
        };

        this.playerShips = [
            'A1-A2',
            'B6-B9',
            'C5',
            'G1-G4',
            'D10-E10',
            'J10',
            'E8-G8',
            'J1-J4',
        ];
    };

    tryPlaceShip(str) {
        //driver script to place a ship
        if (!validateInput(str)) return false;

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
            if (this.board[x][y] === this.CELL_TYPES.SHIP) {
                return false;
            }
        }
        return true;
    }


    getPlacementCoordinates(str) {
        //returns all coordinates for a ship placement in a 2-Dimensional Array e.g. [[0,1],[0,2],[0,3]]
        // Single cell, e.g. "C10"
        if (!str.includes("-")) {
            const [x, y] = transCoordinates(str);
            return [[x, y]];
        }
        // Range input, e.g. "C5-C8"
        const [from, to] = str.split("-");
        const [x1, y1] = transCoordinates(from);
        const [x2, y2] = transCoordinates(to);

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
                const ny = y + dy;
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
            const [x, y] = transCoordinates(str);
            this.board[x][y] = this.CELL_TYPES.SHIP;
            return;
        };

        const line = str.split("-");
        const [x1, y1] = transCoordinates(line[0]);
        const [x2, y2] = transCoordinates(line[1]);

        if (x1 === x2) {
            //horizontal ship
            for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
                this.board[x1][y] = this.CELL_TYPES.SHIP;
            };
        } else if (y1 === y2) {
            //vertical ship
            for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
                this.board[x][y1] = this.CELL_TYPES.SHIP;
            };
        } else {
            throw new Error("Nur horizontale oder vertikale Platzierungen erlaubt.");
        };
    };

    receiveAttack(x, y) {
        const attackedPos = this.board[x][y];
        if (attackedPos === '-') {
            this.board[x][y] = this.CELL_TYPES.MISS;
            return 'miss';
        } else if (attackedPos === this.CELL_TYPES.MISS || attackedPos === this.CELL_TYPES.HIT) {
            return 'repeat';
        } else if (attackedPos === this.CELL_TYPES.SHIP) {
            this.board[x][y] = this.CELL_TYPES.HIT;
            this.receiveShipHit(x, y);
            return 'hit';
        };
    }

    noAttackYet(x, y) {
        const cell = this.board[x][y]
        console.log(cell)
        return (
            cell !== this.CELL_TYPES.HIT &&
            cell !== this.CELL_TYPES.MISS
        );
    }

    receiveShipHit(x, y) {
        const ship = this.coordToShip.get(`${x},${y}`);
        ship.hit();
    };

    allShipsSunk() {
        const uniqueShips = new Set(this.coordToShip.values());
        for (const ship of uniqueShips) {
            if (!ship.isSunk()) {
                return false;
            };
        };
        return true;
    };

    createEmptyBoard() {
        return Array.from({ length: 10 }, () => Array(10).fill(this.CELL_TYPES.WATER));
    }

    resetBoard() {
        this.board = this.createEmptyBoard();
        this.coordToShip.clear();
    }
}