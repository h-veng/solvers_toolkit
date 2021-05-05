function drawSudokuGrid (sideLength) {
    let boardLayout = document.getElementById("board-layout");
    let u = sideLength/9;
    for(let i = 1; i < 9; i++) {
        let vLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        let lineClass = "";
        if(i % 3 == 0) {
            lineClass = "line-box";
        } else {
            lineClass = "line-cell";
        }

        vLine.setAttribute("x1", u*i);
        vLine.setAttribute("y1", 0);
        vLine.setAttribute("x2", u*i);
        vLine.setAttribute("y2", sideLength);
        vLine.setAttribute("class", lineClass);
        boardLayout.appendChild(vLine);

        let hLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        hLine.setAttribute("x1", 0);
        hLine.setAttribute("y1", u*i);
        hLine.setAttribute("x2", sideLength);
        hLine.setAttribute("y2", u*i);
        hLine.setAttribute("class", lineClass);
        boardLayout.appendChild(hLine);
    }
}

drawSudokuGrid(900);