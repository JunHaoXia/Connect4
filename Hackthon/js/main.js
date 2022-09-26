var canvas;
var ctx;
var circles = [];
var game;
var color = 0


const background = new Image();
background.src = 'game_board.png';
window.onload = function() {
    canvas = document.getElementById("gameArea");
    ctx = canvas.getContext("2d");
    game = new gameState();
    document.getElementById("button1").onmousedown = (event) => {
        game.addCircle(0,color)
        color = color + 1
    }
    document.getElementById("button2").onmousedown = (event) => {
        game.addCircle(1,color);
        color = color + 1
    }
    document.getElementById("button3").onmousedown = (event) => {
        game.addCircle(2,color);
        color = color + 1
    }
    document.getElementById("button4").onmousedown = (event) => {
        game.addCircle(3,color);
        color = color + 1
    }
    document.getElementById("button5").onmousedown = (event) => {
        game.addCircle(4,color);
        color = color + 1
    }
    document.getElementById("button6").onmousedown = (event) => {
        game.addCircle(5,color);
        color = color + 1
    }
    document.getElementById("button7").onmousedown = (event) => {
        game.addCircle(6,color);
        color = color + 1
    }
    gameLoop = setInterval(step,1000/50); //calls draw 50 times a sec
}
function step(){
    game.step()
    this.draw();
}
function draw(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //for(i = 0; i < circles.length; i++){
    //    circles[i].drawCircle();
    //}
    game.draw()
    for(i = 0; i < circles.length; i++){
        circles[i].drawCircle();
    }
    ctx.drawImage(background, 140, 20);
}
function placeCircle(x){

}