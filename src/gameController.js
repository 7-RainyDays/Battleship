import { Player, Computer } from "./classes";

export default class GameController {
    constructor(player, computer, domHandler) {
        this.player = player;
        this.computer = computer;
        this.dom = domHandler;

        this.currentPlayer = 'player';
        this.gameOver = false;
        this.playerShips = [
            'A1-A2',
            'B6-B9',
            'C5',
            'G1-G4',
            'D10-E10',
            'J10',
            'E8-G8',
            'J1-J4',
        ];

        this.computerShips = [
            'A1-A2',
            'B6-B9',
            'C5',
            'G1-G4',
            'D10-E10',
            'J10',
            'E8-G8',
            'J1-J4',
        ]

        this.initEventListeners();
    }

    initEventListeners() {
        const startBtn = document.querySelector('.start-game');
        const resetBtn = document.querySelector('.reset-game');
        const computerBoard = document.querySelector('.computer-board');
        startBtn.addEventListener('click', () => this.placeShips());
        resetBtn.addEventListener('click', () => this.resetGame());

        computerBoard.addEventListener('click', (e) => {
            if (this.gameOver || this.currentPlayer !== 'player') return;

            const cell = e.target.closest('td');
            if (!cell) return;

            const [boardY, boardX] = this.getBoardCoordinatesFromCell(cell);

            if (!this.computer.board.noAttackYet(boardY, boardX)) return;

            this.handlePlayerMove(boardY, boardX);
        });
    }

    // necessary transition of the coordinates
    // data-x = Spalte → muss zu board[ZEILE][SPALTE] → board[y][x]
    getBoardCoordinatesFromCell(cell) {
        const x = parseInt(cell.dataset.x); // Spalte
        const y = parseInt(cell.dataset.y); // Zeile
        return [y, x]; // board[y][x]
    }

    handlePlayerMove(y, x) {
        const result = this.computer.board.receiveAttack(y, x); // board[y][x]
        console.log(`Spieler greift an bei [${y}, ${x}]: ${result}`);
        this.dom.updateGameboard(this.computer, false);

        if (this.checkGameOver(this.computer)) {
            this.endGame('Spieler');
            return;
        }

        this.currentPlayer = 'computer';

        setTimeout(() => {
            this.handleComputerMove();
        }, 500);
    }

    handleComputerMove() {
        const [x, y] = this.computer.getRandomCoords();
        this.player.board.receiveAttack(y, x);
        this.dom.updateGameboard(this.player, true);

        if (this.checkGameOver(this.player)) {
            this.endGame('Computer');
            return;
        }

        this.currentPlayer = 'player';
    }

    placeShips() {
        for (const ship of this.playerShips) {
            this.player.board.tryPlaceShip(ship);
        }
        for (const ship of this.computerShips) {
            this.computer.board.tryPlaceShip(ship);
        }
        this.dom.updateGameboard(this.player, true);
        this.dom.updateGameboard(this.computer, false);
    }

    checkGameOver(playerObj) {
        return playerObj.board.allShipsSunk();
    }

    endGame(winner) {
        this.gameOver = true;
        alert(`${winner} hat gewonnen!`);
    }

    resetGame() {
        this.player = new Player;
        this.computer = new Computer;
        this.dom.updateGameboard(this.player, true);
        this.dom.updateGameboard(this.computer, false);
    }
}
