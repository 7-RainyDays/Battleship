import './style.css';
import { Player, Computer } from './classes.js';
import domHandler from './domAction.js';
import GameController from './gameController.js';

//Bug-shiff kann nicht diagonal angrenzen

const gameStarted = false;
const player = new Player();
const computer = new Computer();
const dom = domHandler(player, computer);

document.addEventListener('DOMContentLoaded', () => {

    const gameState = new GameController(player, computer, dom);
});