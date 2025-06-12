export default class GameController {
    constructor(player, computer, domHandler) {
        this.player = player;
        this.computer = computer;
        this.dom = domHandler;

        this.currentPlayer = 'player';
        this.gameOver = false;

        this.initEventListeners();
    }

    initEventListeners() {
        const computerBoard = document.querySelector('.computer-board');

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
        const [x, y] = this.computer.getRandomCoords(); // [x, y] in DOM → board[y][x]
        this.player.board.receiveAttack(y, x);
        this.dom.updateGameboard(this.player, true);

        if (this.checkGameOver(this.player)) {
            this.endGame('Computer');
            return;
        }

        this.currentPlayer = 'player';
    }

    checkGameOver(playerObj) {
        return playerObj.board.allShipsSunk();
    }

    endGame(winner) {
        this.gameOver = true;
        alert(`${winner} hat gewonnen!`);
    }
}
