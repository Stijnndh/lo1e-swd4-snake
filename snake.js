let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;

let foodX;
let foodY


let direction = null;

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
        if (snakeX < 380) {
            snakeX += 20;
        }else {
            gameOver();
        }
    }else if(direction == 'left') {
        if (snakeX > 0) {
            snakeX -= 20;
        }else {
            gameOver();
        }
        
    }else if(direction == 'down') {
        if (snakeY < 380) {
            snakeY += 20;
        }else {
            gameOver();
        }
    }else if(direction == 'up') {
        if (snakeY > 0) {
            snakeY -= 20;
        }else {
            gameOver();
        }
    }
    drawBackground();
    drawSnake();
    drawFood();
}

function changeDirection(event) {
    if(event.code == 'ArrowUp' ) {
    direction = 'up';
    }
    if(event.code == 'ArrowRight' ) {
    direction = 'right';
    }
    if(event.code == 'ArrowLeft' ) {
    direction = 'left';
    }
    if(event.code == 'ArrowDown' ) {
    direction = 'down';
    }
}


function gameOver() {
    direction = null;
    alert("Game Over!")
}

function spawnFood() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;

}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, 20, 20)
}

drawBackground();
drawSnake();
setInterval(update, 200);
addEventListener('keydown', changeDirection)
spawnFood();