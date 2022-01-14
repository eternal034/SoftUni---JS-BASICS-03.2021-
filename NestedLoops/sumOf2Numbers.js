function sumOf2Numbers(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;
    let intCounter = 0;

    for(let i = x; i <= y; i++){
        for(let j = x; j <= y; j++){
            intCounter++;
            if( i + j === magicNum){
                console.log(`Combination N:${intCounter} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${intCounter} combinations - neither equals ${magicNum}`)
    }
}

sumOf2Numbers(["23",
"24",
"20"])