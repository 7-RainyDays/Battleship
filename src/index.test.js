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
    gameboard.receiveAttack('A1');
    expect(gameboard.board[0][0]).toBe('x');

});

test('hitting a ship on the board ', () => {
    const gameboard = new Gameboard();
    gameboard.tryPlaceShip('A2');
    gameboard.receiveAttack('A2');
    expect(gameboard.board[0][1]).toBe('o');
});
