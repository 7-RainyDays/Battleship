import Gameboard from './gameboard.js';

export default class Player {
    constructor() {
        this.name = "player";
        this.board = new Gameboard;
        this.placedShips = [];
    }
}