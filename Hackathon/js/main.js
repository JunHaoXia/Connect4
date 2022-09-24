var canvas;
var ctx;
var circles = [];
const background = new Image();
background.src = 'game_board.png';
window.onload = function() {
    canvas = document.getElementById("gameArea");
    ctx = canvas.getContext("2d");
    circles.push(new Circle(190,300));
    circles.push(new Circle(190,50));
    console.log(circles);
    gameLoop = setInterval(step,1000/50); //calls draw 50 times a sec
}
function step(){
    for(i = 0; i < circles.length; i++){
        circles[i].step();
    }
    this.draw();
}
function draw(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //for(i = 0; i < circles.length; i++){
    //    circles[i].drawCircle();
    //}
    ctx.drawImage(background, 140, 20);
    for(i = 0; i < circles.length; i++){
        circles[i].drawCircle();
    }
}
