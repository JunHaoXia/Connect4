function gameState(){
    this.gameState =  Array.from(Array(7), () => new Array(6))
    this.length = 6
    this.width = 7
    this.color = "white"
    this.columnCount = [0,0,0,0,0,0,0]
    this.addCircle = function(x, num){
        num = num % 2
        console.log(num)
        switch(num){
            case 0:
                this.color = "red"
                break;
            case 1:
                this.color = "yellow"
                break;
        }
        console.log(this.color)
            if(this.columnCount[x] < this.length){
                this.gameState[x][this.columnCount[x]] = this.color
                circles.push(new Circle(190 + (90*(x)),0,this.color))
                this.columnCount[x] = this.columnCount[x] + 1
            }
            else{
                console.log("Full Column")
            }
            //newCircle = this.gameState[x][i]
            //newCircle.drawCircle()
    }
    this.draw = function(){
        for (i = 0; i < circles.length; i++){
            circles[i].drawCircle()
        }
    }
    this.step = function(){
        for (i = 0; i < circles.length; i++){
            circles[i].step()
        }
    }
}