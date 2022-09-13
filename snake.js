let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let direction = 'down';

function drawBackground() {
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);
}


function drawSnake(){
ctx.fillStyle = "green";
ctx.fillRect(snakeX, snakeY, 20, 20)
}

function update() {
    if(direction == 'right') {
    snakeX += 20;
    }else if(direction == 'left') {
        snakeX -= 20;
    }else if(direction == 'down') {
        snakeY += 20;
    }else if(direction == 'up') {
        snakeY -= 20;
    }
    drawBackground();
    drawSnake();
}


drawBackground();
drawSnake();

setInterval(update, 1000);