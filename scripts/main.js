function generateGameHTML () {
    var game = document.createElement("div");
    game.id = "game";

    var board = document.createElement("div");
    board.id = "board";
    game.appendChild(board);

    let boardLayout = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    boardLayout.id = "board-layout";
    boardLayout.setAttribute("viewBox", "0 0 900 900");
    board.appendChild(boardLayout);

    for(var i = 0; i < 9; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for(var j = 0; j < 9; j++) {
            var cell = document.createElement("div");
            cell.className = "cell"
            var cellValue = document.createElement("div");
            cellValue.className = "cell-value";
            cell.appendChild(cellValue);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    document.body.prepend(game);
}

generateGameHTML();