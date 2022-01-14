function pointOnRectangleBorder(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2= Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    let onBorder1 = false;
    let onBorder2 = false;

    if((x == x1 || x == x2) && (y >= y1 && y <= y2)){
        onBorder1 = true;
    } else if ((y == y1 || y == y2) && (x >= x1 && x <= x2)){
        onBorder2 = true;
    }

    if(onBorder1 || onBorder2){
        console.log("Border");
    } else {
        console.log("Inside / Outside")
    }

}

pointOnRectangleBorder([2,-3,12,3,12,-1]);
