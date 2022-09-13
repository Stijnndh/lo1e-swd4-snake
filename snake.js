let canvas = document.getElementById("snake");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 400, 400);

ctx.fillStyle = "green";
ctx.fillRect(200, 200, 20, 20)

function update() {
    console.log('update');
}


setInterval(update, 1000);