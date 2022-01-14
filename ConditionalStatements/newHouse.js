function newHouse(input){
    let flowerType = (input[0]);
    let flowerQuantity = Number(input[1]);
    let budget = Number(input[2]);

    let finalSum = 0.00;
//- "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

    switch(flowerType){
        case "Roses": finalSum = flowerQuantity * 5;
            if(flowerQuantity > 80){
                finalSum*=0.90;
            }
            break;
        case "Dahlias": finalSum = flowerQuantity * 3.80;
            if(flowerQuantity > 90){
                finalSum*=0.85;
            }
            break;
        case "Tulips": finalSum = flowerQuantity * 2.80;
            if(flowerQuantity > 80){
                finalSum*=0.85
            }
            break;
        case "Narcissus": finalSum = flowerQuantity * 3;
            if(flowerQuantity < 120){
                finalSum*=1.15;
            }
            break;
        case "Gladiolus": finalSum = flowerQuantity * 2.50;
            if(flowerQuantity < 80){
                finalSum*=1.20;
            }
            break;
    }
    
    if(budget >= finalSum){
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${(budget - finalSum).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money, you need ${(finalSum - budget).toFixed(2)} leva more.`)
    }

}

newHouse(["Roses", "55","250"]);