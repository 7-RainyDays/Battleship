import Player from './player.js'

export default class Computer extends Player {
    constructor() {
        super();
        this.name = "computer"
        this.attackedCoords = [];
        this.availableMoves = [];
        this.initializeMoves();
    }

    initializeMoves() {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                this.availableMoves.push(`${x},${y}`);
            }
        }
    }

    getRandomCoords() {
        if (this.availableMoves.length === 0) return null;
        const item = this.availableMoves[Math.floor(Math.random() * this.availableMoves.length)];
        this.attackedCoords.push(item);
        const index = this.availableMoves.indexOf(item);
        this.availableMoves.splice(index, 1);
        return item.split(',').map(Number);
    }

    randomAttack(player) {
        const [x, y] = this.getRandomCoords();
        console.log(x, y);
        player.board.receiveAttack(x, y);
    }
}