function drawGrid () {
    var c = document.getElementById("board-layout");
    var ctx = c.getContext("2d");

    ctx.strokeStyle = "#ffffff";
    for(var i = 1; i < 9; i++) {
        if (i % 3 == 0) {
            ctx.lineWidth = "4";
        } else {
            ctx.lineWidth = "2";
        }
        ctx.beginPath();
        ctx.moveTo(i*100, 0);
        ctx.lineTo(i*100, 900);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i*100);
        ctx.lineTo(900, i*100);
        ctx.stroke();
    }
}

drawGrid();