const domHandler = (player, computer) => {

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

    const updateGameboard = (person, visible = true) => {
        const board = person.board.board;
        const boardType = person.name;

        for (let y = 0; y < 10; y++) { // y = Zeile
            for (let x = 0; x < 10; x++) { // x = Spalte
                const cellValue = board[y][x]; // korrekt: [zeile][spalte]

                const selectedCell = document.querySelector(
                    `.${boardType}-board tbody tr:nth-child(${y + 1}) td:nth-child(${x + 2})`
                );

                if (!selectedCell) continue;

                if (cellValue === 's') {
                    if (visible) {
                        selectedCell.classList.add('ship');
                    } else {
                        selectedCell.classList.add('hiddenShip');
                    }
                } else if (cellValue === 'o') {
                    selectedCell.classList.add('hit');
                } else if (cellValue === 'x') {
                    selectedCell.classList.add('water');
                }
            }
        }
    };


    return { updateGameboard };
}

export default domHandler;