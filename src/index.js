import './style.css';
import { Ship, Gameboard, Player } from './classes.js';
import domHandler from './domAction.js';

//Bug-shiff kann nicht diagonal angrenzen


const gameStarted = true;
const player = new Player("human");
const computer = new Player("computer");
const dom = domHandler();


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

const computerShips = [
    'A1-A2',
    'B6-B9',
    'C5',
    'G1-G4',
    'D10-E10',
    'J10',
    'E8-G8',
    'J1-J4',
]

window.player = player;
window.computer = computer;

document.addEventListener('DOMContentLoaded', () => {

    for (const ship of playerShips) {
        player.board.tryPlaceShip(ship);
    }
    for (const ship of computerShips) {
        computer.board.tryPlaceShip(ship);
    }

    dom.updateGameboard(player.board.board, "player", true);

    dom.updateGameboard(computer.board.board, "computer", false);
});

