import './style.css';
import { Ship, Gameboard, Player } from './classes.js';
import domHandler from './domAction.js';


const gameStarted = true;
const dom = domHandler();
const player = new Player("human");
const computer = new Player("ai");

const playerShips = [
    'A1-A2',
    'B6-B9',
    'C5',
    'G1-G4',
    'D10-E10',
    'J10',
    'E8-G8',
    'J1-J4',
];

window.player = player;
window.computer = computer;

document.addEventListener('DOMContentLoaded', () => {
    for (const ship of playerShips) {
        player.board.tryPlaceShip(ship);
    }
    dom.updateGameboard(player.board.board);
    console.table(player.board.board);
});


//Bug-shiff kann ihc diagonal angrenzen