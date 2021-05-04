function generateGameHTML () {
    var game = document.createElement("div");
    game.id = "game";

    var board = document.createElement("div");
    board.id = "board";
    game.appendChild(board);

    var canvas = document.createElement("canvas");
    canvas.id = "board-layout";
    canvas.width = 900;
    canvas.height = 900;
    var canvasError = document.createTextNode("Your browser does not support the html canvas tag.");
    canvas.appendChild(canvasError);
    board.appendChild(canvas);

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