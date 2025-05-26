import { Ship, Gameboard } from './index';

test('test ship', () => {
    const ship = new Ship(3);
    expect(ship.len).toBe(3);
});

test('test ship sunk', () => {
    const ship = new Ship(3);
    expect(ship.sunk).toBeFalsy();
});

test('Ship gets hit', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hitCount).toBe(1);
});

test('Ship sinks after enough hits', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('Gameboard translates inserted coordinates to numeric values', () => {
    const gameboard = new Gameboard();
    expect(gameboard.transCoordinates('A1')).toEqual([0, 0]);
});


test('Ship of length 1 has been placed on given coordinates', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(('C10'));
    expect(gameboard.board[2][9]).toBe("s");
});

test('Ship has been placed verically', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(('C7-C10'));
    expect(gameboard.board[2].slice(6, 9)).toEqual(['s', 's', 's'])
});

test('Ship has been placed horizontally', () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(('C7-E7'));
    expect(gameboard.board[2][6]).toEqual('s')
    expect(gameboard.board[3][6]).toEqual('s')
    expect(gameboard.board[4][6]).toEqual('s')
});

