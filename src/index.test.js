import { Ship, Gameboard, Computer } from './classes';

describe('ship interaction', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship(3);
    });
    test('test ship', () => {
        expect(ship.len).toBe(3);
    });

    test('test ship sunk', () => {
        expect(ship.sunk).toBeFalsy();
    });

    test('Ship gets hit', () => {
        ship.hit();
        expect(ship.hitCount).toBe(1);
    });

    test('Ship sinks after enough hits', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBeTruthy;
    });
});

test('Gameboard translates inserted coordinates to numeric values', () => {
    const gameboard = new Gameboard();
    expect(gameboard.transCoordinates('A1')).toEqual([0, 0]);
});


test('Ship of length 1 has been placed on given coordinates', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip('C10');
    expect(gameboard.board[2][9]).toBe("s");
});

test('Ship has been placed verically', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip(('C7-C10'));
    expect(gameboard.board[2].slice(6, 9)).toEqual(['s', 's', 's'])
});

test('Ship has been placed horizontally', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip(('C7-E7'));
    expect(gameboard.board[2][6]).toEqual('s')
    expect(gameboard.board[3][6]).toEqual('s')
    expect(gameboard.board[4][6]).toEqual('s')
});

test('Input is valid', () => {
    const input = 'A2-A5';
    const gameboard = new Gameboard();
    expect(gameboard.validateInput(input)).toBeTruthy();
});

test('Input is invalid', () => {
    const input = ['A21', 'W4', '44', 'A2-A10', 'B1-C2']
    const gameboard = new Gameboard();
    input.forEach((x) => {
        expect(gameboard.validateInput(x)).toBeFalsy();
    });
});

test('Bordering another Ship means invalid Input', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip('A1-A3');
    expect(gameboard.tryPlaceShip('B1-B3')).toBeFalsy();
})

test('hitting an empty field places a hit marker on the board', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0]).toBe('x');

});

test('hitting a ship on the board ', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip('A2');
    gameboard.receiveAttack('A2');
    expect(gameboard.board[0][1]).toBe('o');
});

test('game is over', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip('A1');
    gameboard.receiveAttack(0, 0);
    expect(gameboard.isGameOver()).toBeTruthy();
})

test('game is not over', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip('A1-A2');
    gameboard.receiveAttack(0, 0);
    expect(gameboard.isGameOver()).toBeFalsy();
})

describe('computerPlayer', () => {
    let computer;

    beforeEach(() => {
        computer = new Computer();
    });

    test('initializes with 100 available moves', () => {
        expect(computer.availableMoves.length).toBe(100);
        expect(computer.availableMoves).toContain('0,0');
        expect(computer.availableMoves).toContain('9,9');
    });

    test('getRandomCoords returns a coordinate and updates arrays correctly', () => {
        const initialLength = computer.availableMoves.length;
        const coord = computer.getRandomCoords();

        expect(Array.isArray(coord)).toBe(true);
        expect(coord.length).toBe(2);
        expect(typeof coord[0]).toBe('number');

        const coordStr = coord.join(',');
        expect(computer.attackedCoords).toContain(coordStr);
        expect(computer.availableMoves).not.toContain(coordStr);
        expect(computer.availableMoves.length).toBe(initialLength - 1);
    });

    test('getRandomCoords returns null when no moves are left', () => {
        // Leer alle Züge
        for (let i = 0; i < 100; i++) {
            computer.getRandomCoords();
        }
        expect(computer.availableMoves.length).toBe(0);
        expect(computer.getRandomCoords()).toBe(null);
    });
});

describe('Gameboard resetBoard()', () => {
    test('should reset all cells to WATER after reset', () => {
        const board = new Gameboard();

        board.board[0][0] = board.CELL_TYPES.HIT;
        board.board[1][1] = board.CELL_TYPES.MISS;
        board.board[2][2] = board.CELL_TYPES.SHIP;

        board.resetBoard();

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                expect(board.board[y][x]).toBe(board.CELL_TYPES.WATER);
            }
        }
    });

    test('should clear coordToShip map', () => {
        const board = new Gameboard();
        board.coordToShip.set('1,1', { dummy: true });

        board.resetBoard();

        expect(board.coordToShip.size).toBe(0);
    });
});

