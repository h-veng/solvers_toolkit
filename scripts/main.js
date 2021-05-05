function generateGameHTML () {
    let game = document.createElement("div");
    game.id = "game";

    let board = document.createElement("div");
    board.id = "board";
    game.appendChild(board);

    let boardLayout = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    boardLayout.id = "board-layout";
    boardLayout.setAttribute("viewBox", "0 0 900 900");
    board.appendChild(boardLayout);

    for(let i = 0; i < 9; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j < 9; j++) {
            let cell = document.createElement("div");
            cell.className = "cell"
            let cellValue = document.createElement("div");
            cellValue.className = "cell-value";
            cell.appendChild(cellValue);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    document.body.prepend(game);
}

generateGameHTML();