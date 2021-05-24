class Sudoku {
  constructor() {
    this.ROWS = 9;
    this.COLS = 9;
    this.values = [];
    for (let i = 0; i < this.ROWS; i++) {
      let row = [];
      for (let j = 0; j < this.COLS; j++) {
        row.push(null);
      }

      this.values.push(row);
    }
  }

  getCellValue(row, col) {
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

    return this.values[row][col];
  }

  setCellValue(row, col, value) {
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
    
    this.values[row][col] = value;
    let cellValueHTML = document.getElementById("cell-value" + row.toString() + col.toString());
    cellValueHTML.textContent = value.toString();
  }
}

let s = new Sudoku();
s.setCellValue(0, 0, 5);
