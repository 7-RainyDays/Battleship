//const playerGameboard = document.querySelector('.player-board');
//const computerGameboard = document.querySelector('.computer-board')

export function updateGameboard(board) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j] === 's') {
                const selectedCell = document.querySelector(`.player-board tbody tr:nth-child(${i + 1}) td:nth-child(${j + 2})`);
                selectedCell.classList.add('ship');
            }
        }
    }
}