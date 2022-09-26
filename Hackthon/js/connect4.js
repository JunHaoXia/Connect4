function connectFourAlg(initArray, color){
    if(checkHorizontal(initArray,color)){
        console.log("vert")
        return true;
    }
    if(checkVertical(initArray,color)){
        console.log("hor")
        return true;
    }
    if(checkDiagonal(initArray,color)){
        console.log("diagonal")
        return true;
    }
    return false;
    
}
function checkHorizontal(initArray,color){
    counter=0
    column=initArray.length;//7
    row=initArray[1].length;//6
    for (i=0;i<row;i++){
        for(j=0;j<column;j++){
            if(counter==4){
                return true;
            }
            if(initArray[i][j]==color){
                counter+=1;
            }else{
                counter=0;
            }
        }
        counter=0;

    }
    return false;
}
function checkVertical(initArray,color){
    counter=0
    height=initArray.length;//6
    width=initArray[1].length;//7
    for (i=0;i<width;i++){
        for(j=0;j<height;j++){
            if(counter==4){
                return true;
            }
            if(initArray[j][i]==color){
                counter+=1;
            }else{
                counter=0;
            }
        }
        counter=0
    }
    return false;
}
function checkDiagonal(initArray,color){
    counter=0
    for (i=0;i<4;i++){
        for(j=0;j<initArray.length;j++){
            counter=0;
            if(j<=3){
                if(initArray[i][j]==color){
                    
                    counter+=1;
                    
                    for(x=1;x<4;x++){
                        if(initArray[i+x][j+x]==color){
                            counter+=1;
                        }else{
                            counter=0;
                            break;
                        }
                    }
                    if(counter==4){
                        return true;
                    }
                    counter=0;
                }
            }
            if(j>=3){
                if(initArray[i][j]==color){
                    counter+=1;
                    for(x=1;x<4;x++){
                        if(initArray[i+x][j-x]==color){
                            counter+=1;
                        }else{
                            counter=0;
                            break;
                        }
                    }
                    if(counter==4){
                        return true;
                    }
                    counter=0;
                }
            }
        }
        counter=0;
    }
    return false;
}

