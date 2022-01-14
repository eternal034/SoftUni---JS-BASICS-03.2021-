function averageNum(input){
    let numCounter = Number(input[0]);
    let sum = 0;

    for(let i = 1; i <= numCounter; i++){
        let currentNum = Number(input[i]);
        sum += currentNum;
    }
    let average = sum / numCounter;

    console.log(average.toFixed(2));
}

averageNum(["4","3","2","4","2"])