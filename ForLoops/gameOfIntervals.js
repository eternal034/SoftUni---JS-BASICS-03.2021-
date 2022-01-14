function gameOfIntervals(input){
    let moves = Number(input[0]);
    let result = 0;
    let numsTo9 = 0;
    let numsTo19 = 0;
    let numsTo29 = 0;
    let numsTo39 = 0;
    let numsTo50 = 0;
    let invalidNums = 0;

    for (let num = 1; num <= moves; num++){
        let currentNum = Number(input[num]);
            if (currentNum >= 0 && currentNum <= 9){
                numsTo9++;
                result += currentNum * 0.2;
            } else if (currentNum >= 10 && currentNum <= 19){
                numsTo19++;
                result += currentNum * 0.3;
            } else if (currentNum >= 20 && currentNum <= 29){
                numsTo29++;
                result += currentNum * 0.4;
            } else if (currentNum >= 30 && currentNum <= 39){
                numsTo39++;
                result += 50;
            } else if (currentNum >= 40 && currentNum <= 50){
                numsTo50++
                result += 100;
            } else {
                invalidNums++;
                result /= 2;
            }
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(numsTo9/moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(numsTo19/moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(numsTo29/moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(numsTo39/moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(numsTo50/moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNums/moves * 100).toFixed(2)}`);
}

gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"])