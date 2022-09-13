let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;

function drawBackground() {
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);
}


function drawSnake(){
ctx.fillStyle = "green";
ctx.fillRect(snakeX, snakeY, 20, 20)
}

function update() {
    snakeX += 20;

    drawBackground();
    drawSnake();
}


drawBackground();
drawSnake();

setInterval(update, 1000);