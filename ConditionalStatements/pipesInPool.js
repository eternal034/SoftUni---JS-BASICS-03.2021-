function pipesInPool (input){
    let poolVolume = Number(input[0]);
    let debitFirstPipe = Number(input[1]);
    let debitSecondPipe = Number(input[2]);
    let workerOffHours = Number(input[3]);

    let litresFromFirstPipe = debitFirstPipe * workerOffHours;
    let litresFromSecondPipe = debitSecondPipe * workerOffHours;

    let totalLitres = litresFromFirstPipe + litresFromSecondPipe;
    
    let percentFilled = 0.00;
    let percentByFirstPipe = 0.00;
    let percentBySecondPipe = 0.00;
    let overFlow = 0.00;

    if(totalLitres <= poolVolume){
        percentFilled = ((totalLitres / poolVolume) * 100).toFixed(2);
        percentByFirstPipe = ((litresFromFirstPipe / totalLitres) * 100).toFixed(2);
        percentBySecondPipe = ((litresFromSecondPipe / totalLitres) * 100).toFixed(2);
        console.log(`The pool is ${percentFilled}% full. Pipe 1: ${percentByFirstPipe}%. Pipe 2: ${percentBySecondPipe}%.`);
    } else {
        overFlow = (totalLitres - poolVolume).toFixed(2);
        console.log(`For ${workerOffHours} hours the pool overflows with ${overFlow} liters`);
    } 
}

pipesInPool(["100", "100", "100", "2.5"]);