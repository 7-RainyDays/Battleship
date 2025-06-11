import './style.css';
import { Player, Computer } from './classes.js';
import domHandler from './domAction.js';

//Bug-shiff kann nicht diagonal angrenzen
//brauche type in der Player klasse nicht mehr

const gameStarted = true;
const player = new Player();
const computer = new Computer();
const dom = domHandler(player, computer);


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

    console.log("Player im DOM:", computer);
    console.log("Board des Players:", computer.board);
    console.log("Board intern:", computer.board.board);
    dom.updateGameboard(player, true);

    dom.updateGameboard(computer, false);
});