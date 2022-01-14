function dishwasher(input){
    let detergent = Number(input[0]);

    let totalDetergent = detergent * 750;
    let loadingDishwasher = 0;
    let plates = 0;
    let pots = 0;
    let index = 1;

    while(totalDetergent >= 0 ){
        let command = input[index]
        loadingDishwasher++;

        if(command === "End"){
            console.log(`Detergent was enough!`);
            console.log(`${plates} dishes and ${pots} pots were washed.`);
            console.log(`Leftover detergent ${totalDetergent} ml.`);
            break;
        } else {
            currentQuantity = Number(command);
        }

        if (loadingDishwasher % 3 === 0){
            totalDetergent -= currentQuantity * 15;
            pots += currentQuantity;
        } else {
            totalDetergent -= currentQuantity * 5;
            plates += currentQuantity;
        }

        index++;

    }

    if(totalDetergent < 0){
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`);
    }
    
}

dishwasher(["1","10","15","10","12","13","30",])
