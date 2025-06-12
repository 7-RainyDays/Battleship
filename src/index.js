import './style.css';
import { Player, Computer } from './classes.js';
import domHandler from './domAction.js';
import GameController from './gameController.js';

//Bug-shiff kann nicht diagonal angrenzen

const gameStarted = false;
const player = new Player();
const computer = new Computer();
const dom = domHandler(player, computer);
const gameState = new GameController(player, computer, dom);

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

document.addEventListener('DOMContentLoaded', () => {

    for (const ship of playerShips) {
        player.board.tryPlaceShip(ship);
    }
    for (const ship of computerShips) {
        computer.board.tryPlaceShip(ship);
    }
    dom.updateGameboard(player, true);
    dom.updateGameboard(computer, false);
});