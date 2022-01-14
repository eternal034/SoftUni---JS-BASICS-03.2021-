function area(input){
    let type = (input[0]);
    let result = 0;
    if(type === "square"){
        let squareA = Number(input[1]);
        result = squareA * squareA ;
    } else if(type === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b; 
    } else if(type === "circle"){
        let r = Number(input[1]);
        result = Math.PI * r * r;
    } else if(type === "triangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = (a * b) /2;
    }
    console.log(result.toFixed(3));
}

area(["triangle","4.5", "20"])