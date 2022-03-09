function cellStatus(liveCell, noOfNeighbouringCells){
    // if (liveCell === true && noOfNeighbouringCells < 2) {
    //     return false;
    // } else {
    //     return true;
    // }
    // if (liveCell === true && noOfNeighbouringCells > 3) {
    //     return false;
    // } else if (liveCell === true && noOfNeighbouringCells < 3){
    //     return false;
    // }
    // else {
    //     return true;
    // }    

    return liveCell===true?noOfNeighbouringCells===2||noOfNeighbouringCells===3?true:false:noOfNeighbouringCells===3?true:false;
}
export{cellStatus}


