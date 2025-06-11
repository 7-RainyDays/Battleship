const domHandler = (player, computer) => {

    const startBtn = document.querySelector('.start-game');
    startBtn.addEventListener('click', () => alert('game has started'));

    const resetBtn = document.querySelector('.reset-game');
    resetBtn.addEventListener('click', () => alert('game reseted'));

    const playerBoard = document.querySelector('.player-board')
    const computerBoard = document.querySelector('.computer-board')

    function annotateBoardCells(boardSelector) {
        const board = document.querySelector(`${boardSelector} tbody`);
        const rows = board.querySelectorAll('tr');

        rows.forEach((row, y) => {
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, x) => {
                cell.dataset.x = x;
                cell.dataset.y = y;
            });
        });
    };

    annotateBoardCells('.player-board');
    annotateBoardCells('.computer-board');

    computerBoard.addEventListener('click', function (e) {
        const cell = e.target.closest('td');
        if (!cell) return;
        const x = cell.dataset.x;
        const y = cell.dataset.y;
        console.log(computer.board.receiveAttack2(x, y));
        updateGameboard(computer, false);
    });

    const updateGameboard = (person, visible = true) => {
        const board = person.board.board;
        const boardType = person.name;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cellValue = board[i][j]
                const selectedCell = document.querySelector(
                    `.${boardType}-board tbody tr:nth-child(${j + 1}) td:nth-child(${i + 2})`
                );
                if (cellValue === 's') {
                    if (!selectedCell) console.log("fail");
                    if (visible) {
                        selectedCell.classList.add('ship');
                    } else {
                        selectedCell.classList.add('hiddenShip');
                    }
                } else if (cellValue === 'o') {
                    selectedCell.classList.add('hit');
                } else if (cellValue === 'x') {
                    selectedCell.classList.add('water');
                };
            };
        };
    };

    return { updateGameboard };
}

export default domHandler;