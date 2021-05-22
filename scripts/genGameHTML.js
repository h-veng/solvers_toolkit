let genSdkSvg = function generateSudokuSVG() {
  let boardLayout = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  boardLayout.id = "board-layout";
  boardLayout.setAttribute("viewBox", "0 0 900 900");
  for (let i = 1; i < 9; i++) {
    let vLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    let lineClass = "";
    if (i % 3 === 0) {
      lineClass = "line-box";
    } else {
      lineClass = "line-cell";
    }

    vLine.setAttribute("x1", 100 * i);
    vLine.setAttribute("y1", 0);
    vLine.setAttribute("x2", 100 * i);
    vLine.setAttribute("y2", 900);
    vLine.setAttribute("class", lineClass);
    boardLayout.appendChild(vLine);

    let hLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    hLine.setAttribute("x1", 0);
    hLine.setAttribute("y1", 100 * i);
    hLine.setAttribute("x2", 900);
    hLine.setAttribute("y2", 100 * i);
    hLine.setAttribute("class", lineClass);
    boardLayout.appendChild(hLine);
  }

  return boardLayout;
}

let genGameHTML = function generateGameHTML() {
  let game = document.createElement("div");
  game.id = "game";

  let board = document.createElement("div");
  board.id = "board";
  game.appendChild(board);

  let boardLayout = genSdkSvg();
  board.appendChild(boardLayout);

  for (let i = 0; i < 9; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 9; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.id = "cell" + i.toString() + j.toString();
      let cellValue = document.createElement("div");
      cellValue.className = "cell-value";
      cellValue.id = "cell-value" + i.toString() + j.toString();
      cell.appendChild(cellValue);
      row.appendChild(cell);
    }

    board.appendChild(row);
  }

  return game;
}

let game = genGameHTML();
document.body.prepend(game);
