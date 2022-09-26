function gameState(){
    this.gameState =  Array.from(Array(7), () => new Array(6))
    this.length = 6
    this.width = 7
    this.color = "red"
    let playerColor = document.getElementById("player-color");
    playerColor.innerHTML = "";
    playerColor.appendChild(document.createTextNode(this.color));
    this.columnCount = [0,0,0,0,0,0,0]
    this.addCircle = function(x, num){
        num = num % 2
        console.log(num)
        switch(num){
            case 0:
                this.color = "red"
                playerColor.innerHTML = "";
                playerColor.appendChild(document.createTextNode("yellow"));
                break;
            case 1:
                this.color = "yellow"
                playerColor.innerHTML = "";
                playerColor.appendChild(document.createTextNode("red"));
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
            if (connectFourAlg(this.gameState,this.color)){

                let deleteSongSpan = document.getElementById("winner-color");
                deleteSongSpan.innerHTML = "";
                deleteSongSpan.appendChild(document.createTextNode(this.color));
                let newModal = document.getElementById("game-won-modal");
                newModal.classList.add("is-visible")

                let deleteSongCancelButton=document.getElementById("won-again-button");
                deleteSongCancelButton.onclick = (event)=>{
                    let newModal = document.getElementById("game-won-modal");
                    newModal.classList.remove("is-visible")
                    console.log("game is won")
                    game= new gameState()
                    circles = [];
                }

            }if(this.isFull()){
                let newModal = document.getElementById("game-tie-modal");
                newModal.classList.add("is-visible")

                let deleteSongCancelButton=document.getElementById("tie-again-button");
                deleteSongCancelButton.onclick = (event)=>{
                    let newModal = document.getElementById("game-tie-modal");
                    newModal.classList.remove("is-visible")
                    console.log("game is tie")
                    game= new gameState()
                    circles = [];
                }
            }
            
    }
    this.isFull = function(){
        for(i=0;i<this.columnCount.length;i++){
            if(this.columnCount[i]!=6){
                return false;
            }
        }
        return true;
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