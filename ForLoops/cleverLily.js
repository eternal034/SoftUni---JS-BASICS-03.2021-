function cleverLily(input){
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2])

    let sumToy = 0.00;
    let sumMoney = 0.00;
    let money = 10;
    let totalSum = 0.00

    for(let i = 1; i <= age; i++){
        if(i % 2 === 1){
            sumToy++;
        } else {
            sumMoney += money;
            money += 10;
            sumMoney--;
        }     
    }

    totalSum = sumMoney + (sumToy * singleToyPrice);

    if(totalSum >= washingMachinePrice){
        console.log(`Yes! ${(totalSum - washingMachinePrice).toFixed(2)}`);
    } else if (washingMachinePrice > totalSum){
        console.log(`No! ${(washingMachinePrice - totalSum).toFixed(2)} `);
    }

}

cleverLily(["21", "1570.98", "3"])