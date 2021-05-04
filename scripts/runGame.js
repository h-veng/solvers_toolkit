class Sudoku {
    constructor() {
        const ROWS = 9;
        const COLS = 9;
        var values = [];
        for(var i = 0; i < ROWS; i++) {
            var row = [];
            for(var j = 0; j < COLS; j++) {
                row.push(null);
            }
            values.push(row);
        }
    }

    
}