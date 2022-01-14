function piramid(input){
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let string = "";

    for(let rows = 1; rows <= n; rows++){
        for (let colums = 1; colums <= rows; colums++){
            if(current > n){
                isBigger = true;
                break;
            }
            string += current + " ";
            current++;
        }
        console.log(string);
        string = "";
        if(isBigger){
            break;
        }
    }
}

piramid(["10"]);