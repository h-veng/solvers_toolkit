let genLineSvg = function generateVeritcalLine(xStart, yStart, xFinish, yFinish) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", xStart);
  line.setAttribute("y1", yStart);
  line.setAttribute("x2", xFinish);
  line.setAttribute("y2", yFinish);
  return line;
}

let genSdkSvg = function generateSudokuSVG(scale = 100) {
  let boardBackground = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  boardBackground.id = "board-background";
  let sideLen = 9 * scale;
  boardBackground.setAttribute("viewBox", "0 0 " + sideLen.toString() + " " + sideLen.toString());
  for (let i = 1; i < 9; i++) {
    let commonCoord = i * scale;
    let verticalLine = genLineSvg(commonCoord, 0, commonCoord, sideLen);
    let horizontalLine = genLineSvg(0, commonCoord, sideLen, commonCoord);
    if (i % 3 === 0) {
      verticalLine.setAttribute("class", "line-box");
      horizontalLine.setAttribute("class", "line-box");
    } else {
      verticalLine.setAttribute("class", "line-cell");
      horizontalLine.setAttribute("class", "line-cell");
    }
    
    boardBackground.appendChild(verticalLine);
    boardBackground.appendChild(horizontalLine);
  }

  return boardBackground;
}

let genCellHTML = function generateCellHTML(rowNumber, colNumber) {
  let cell = document.createElement("div");
  cell.className = "cell";
  cell.id = "cell" + rowNumber.toString() + colNumber.toString();
  let cellValue = document.createElement("div");
  cellValue.className = "cell-value";
  cellValue.id = "cell-value" + rowNumber.toString() + colNumber.toString();
  cell.appendChild(cellValue);
  return cell;
}

let genCellRowHTML = function generateRowOfCellsHTML(rowNumber) {
  let row = document.createElement("div");
  row.className = "row";
  for (let colNumber = 0; colNumber < 9; colNumber++) {
    let cell = genCellHTML(rowNumber, colNumber);
    row.appendChild(cell);
  }

  return row;
}

let genBoardCellsHTML = function generateBoardCellsHTML() {
  let boardCells = document.createElement("div");
  boardCells.id = "board-cells";
  for (let rowNumber = 0; rowNumber < 9; rowNumber++) {
    let row = genCellRowHTML(rowNumber);
    boardCells.appendChild(row);
  }

  return boardCells;
}

let board = document.getElementById("board");
let boardBackground = genSdkSvg(100);
board.appendChild(boardBackground);
let boardCells = genBoardCellsHTML();
board.appendChild(boardCells);