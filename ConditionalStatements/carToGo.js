function carToGo(input){
    let budget = Number(input[0]);
    let season = (input[1]);

    let carClass = "";
    let carType = "";

    if(budget <= 100){
        carClass = "Economy class";
        switch(season){
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.35;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = budget * 0.65;
                break;
        }       
    } else if (budget > 100 && budget <= 500){
        carClass = "Compact class";
        switch(season){
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.45;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = budget * 0.80;
                break;
        }       
    } else if (budget > 500){
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = budget * 0.9
    }

    console.log(`${carClass}`);
    console.log(`${carType} - ${(carPrice).toFixed(2)}`);
}

carToGo(["99.99","Summer"]);