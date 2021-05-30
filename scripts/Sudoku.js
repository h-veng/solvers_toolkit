export function Sudoku() {
  const ROWS = 9;
  const COLS = 9;
  let values = [];
  for (let i = 0; i < ROWS; i++) {
    let row = [];
    for (let j = 0; j < COLS; j++) {
      row.push(null);
    }

    values.push(row);
  }

  let getCellValue = function getCellValue(row, col) {
    if (row < 0) {
      return null;
    }

    if (col < 0) {
      return null;
    }

    if (row > 8) {
      return null;
    }

    if (row > 8) {
      return null;
    }

    return values[row][col];
  }

  let setCellValue = function setCellValue(row, col, value) {
    if (row < 0) {
      return;
    }

    if (col < 0) {
      return;
    }

    if (value < 1) {
      return;
    }

    if (row > 8) {
      return;
    }

    if (row > 8) {
      return;
    }

    if (value > 9) {
      return;
    }
    
    values[row][col] = value;
    let cellValueHTML = document.getElementById("cell-value" + row.toString() + col.toString());
    cellValueHTML.textContent = value.toString();
  }

  return {
    getCellValue: getCellValue,
    setCellValue: setCellValue
  }
}