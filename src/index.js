import { Ship, Gameboard, Player } from './classes.js';
import { updateGameboard } from './domAction.js';

const gameStarted = true;
const player = new Player("human");
const computer = new Player("ai");

document.addEventListener('DOMContentLoaded', () => {
    player.board.tryPlaceShip('A1-A4');
    console.table(player.board.board);
    updateGameboard(player.board.board);

    computer.board.tryPlaceShip('D1-D4');
    console.table(computer.board.board);
    updateGameboard(computer.board.board);

});