function generateGameHTML () {
    let game = document.createElement("div");
    game.id = "game";

    let board = document.createElement("div");
    board.id = "board";
    game.appendChild(board);

    let canvas = document.createElement("canvas");
    canvas.id = "board-layout";
    canvas.width = 900;
    canvas.height = 900;
    let canvasError = document.createTextNode("Your browser does not support the html canvas tag.");
    canvas.appendChild(canvasError);
    board.appendChild(canvas);

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