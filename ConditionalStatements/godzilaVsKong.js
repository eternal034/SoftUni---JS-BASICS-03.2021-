function godzilaVsKong(input){
    
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let dekorPrice = budget * 0.1;

    let priceForAllStatist = statistCount * clothesPrice;

    if (statistCount >= 150){
        priceForAllStatist = priceForAllStatist * 0.9;
    }

    let total = priceForAllStatist + dekorPrice;

    if (total > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }

}

godzilaVsKong(["20000", "120", "55.5"]);