function minNumber(input){
    let numCount = Number(input[0]);
    let inputL = input.length;
    let min = Number.POSITIVE_INFINITY;

    for ( let i = 1; i < inputL; i++){
        let currentNum = Number(input[i]);
            if ( currentNum < min){
                min = currentNum;
            }
    }
    console.log(min);
}

minNumber(["2",
"100",
"99"])