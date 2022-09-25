function Circle(x,y,color){
    this.radius = 40;
    this.x = x;
    this.y = y;
    this.gravity = 5;
    this.color = color;
    this.column = (x-190)/90
    
    this.drawCircle = function(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0, 2*Math.PI);
        ctx.fill()
        ctx.closePath()
    }
    this.step = function(){
        //vertical collision detection
        let verticalRect = {
            x: this.x,
            y: this.y + this.gravity,
            width: this.radius *2,
            height: this.radius *2
        }
        //check for intersection
        //*
        // for(j = 0; j < game.gameState[this.column].length;j++){
        //     if(game.gameState[this.column][j] != null){
        //         let structureRect = {
        //             x: game.gameState[this.column][j].x,
        //             y: game.gameState[this.column][j].y,
        //             height: game.gameState[this.column][j].radius*2,
        //             width: game.gameState[this.column][j].radius*2
        //         }
        //         if(game.gameState[this.column][j] != this){
        //             if(checkIntersection(verticalRect,structureRect)){
        //                 while(checkIntersection(verticalRect,structureRect)){
        //                     verticalRect.y -= Math.sign(this.gravity);
        //                 }
        //                 this.y = verticalRect.y;
        //                 this.gravity = 0;
        //             }
        //         }
        //     }
        // }
        //*
        for (let i = 0; i < circles.length; i++) {
            let structureRect = {
                x: circles[i].x,
                y: circles[i].y,
                height: circles[i].radius*2,
                width: circles[i].radius*2
            }
            if(circles[i] != this){
                if(checkIntersection(verticalRect,structureRect)){
                    while(checkIntersection(verticalRect,structureRect)){
                        verticalRect.y -= Math.sign(this.gravity);
                    }
                    this.y = verticalRect.y;
                    this.gravity = 0;
                }
            }
        }
        if(this.y < 0){
            this.y = 0;
        }
        if(this.x < 0){
            this.x = 0;
        }
        if(this.y >= canvas.height-this.radius){
            this.y = canvas.height-(this.radius+5);
        }
        if(this.x >= canvas.width-this.radius){
            this.x = canvas.width-this.radius;
        }
        this.y += this.gravity;
    }
}
function checkIntersection(r1,r2){
    if(r1.x >= r2.x + r2.width){
        return false;
    }
    else if (r1.x + r1.width <= r2.x){
        return false;
    }
    else if(r1.y >= r2.y + r2.height){
        return false;
    }
    else if(r1.y + r1.height <= r2.y){
        return false;
    }
    else{
        return true;
    }
}