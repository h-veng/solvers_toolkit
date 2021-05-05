class Sudoku {
    // initialize a 9x9 array with null values representing the
    // sudoku game
    constructor() {
        this.ROWS = 9;
        this.COLS = 9;
        this.values_ = [];
        for(let i = 0; i < ROWS; i++) {
            let row = [];
            for(let j = 0; j < COLS; j++) {
                row.push(null);
            }
            values.push(row);
        }
    }

    // get the value of the cell specified by row, col (0-indexed)
    // returns null if row/col are invalid
    getCellValue(row, col) {
        if(row < 0) {
            return null;
        }
        if(col < 0) {
            return null;
        }
        if(row > 8) {
            return null;
        }
        if(row > 8) {
            return null;
        }
        return values[row][col];
    }

    // get the value of the cell specified by row, col (0-indexed)
    // ignores if row/col/value are invalid
    setCellValue(row, col, value) {
        if(row < 0) {
            return;
        }
        if(col < 0) {
            return;
        }
        if(value < 1) {
            return;
        }
        if(row > 8) {
            return;
        }
        if(row > 8) {
            return;
        }
        if(value > 9) {
            return;
        }
        values[row][col] = value;
    }
}