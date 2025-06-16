import Gameboard from './gameboard.js';
import { getRandomInt, coordsToNotation } from '../utility/utils.js';

export default class Player {
    constructor() {
        this.name = "player";
        this.board = new Gameboard;
        this.placedShips = [];
        this.availableShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    }

    //create random coordinates for ships on the board
    createRandomShipPlacement() {
        const placements = [];
        for (const length of this.availableShips) {
            let placed = false;

            while (!placed) {
                const startX = getRandomInt(10);
                const startY = getRandomInt(10);
                const isHorizontal = Math.random() < 0.5;

                const coords = this.createShipRange(startX, startY, length, isHorizontal);
                if (!coords) continue;

                const notation = coordsToNotation(coords);
                if (this.board.tryPlaceShip(notation)) {
                    placed = true;
                    placements.push(notation);
                }
            }
        }
        return placements;
    }

    createShipRange(startX, startY, length, isHorizontal) {
        const coords = [];

        for (let i = 0; i < length; i++) {
            const x = isHorizontal ? startX + i : startX;
            const y = isHorizontal ? startY : startY + i;

            if (x >= 10 || y >= 10) return null;
            coords.push([x, y]);
        }
        return coords;
    }
}