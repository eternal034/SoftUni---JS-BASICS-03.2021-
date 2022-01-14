function fuelTank2(input){
    let typeOfFuel = String(input[0]);
    let fuelQuantity = Number(input[1]);
    let clubCardStatus = String(input[2]);

    let gasolinePerL = 2.22;
    let dieselPerL = 2.33;
    let gasPerL = 0.93;

    let cardDiscount = 0.00;
    let fuelPrice = 0.00;

    if (typeOfFuel === "Gasoline" && clubCardStatus === "Yes"){
        cardDiscount = (fuelQuantity * 0.18).toFixed(2);
        fuelPrice = (fuelQuantity * gasolinePerL) - cardDiscount;
    } else if (typeOfFuel === "Gasoline" && clubCardStatus === "No"){
        fuelPrice = (fuelQuantity * gasolinePerL).toFixed(2);
    }
    
    if (typeOfFuel === "Diesel" && clubCardStatus === "Yes"){
        cardDiscount = (fuelQuantity * 0.12).toFixed(2);
        fuelPrice = (fuelQuantity * dieselPerL) - cardDiscount;
    } else if (typeOfFuel === "Diesel" && clubCardStatus === "No") {
        fuelPrice = (fuelQuantity * dieselPerL).toFixed(2);
    }
    
    if (typeOfFuel === "Gas" && clubCardStatus === "Yes"){
        cardDiscount = (fuelQuantity * 0.08).toFixed(2);
        fuelPrice = (fuelQuantity * gasPerL) - cardDiscount;
    } else if (typeOfFuel === "Gas" && clubCardStatus === "No") {
        fuelPrice = (fuelQuantity * gasolinePerL).toFixed(2);
    }

    let finalPrice = 0.00;
    let finalPriceWithoutDiscount = 0.00;
    
    if (fuelQuantity >= 20 && fuelQuantity <= 25){
        finalPrice = (fuelPrice - (fuelPrice * 0.08)).toFixed(2);
    } else if (fuelQuantity > 25){
        finalPrice = (fuelPrice - (fuelPrice * 0.10)).toFixed(2);
    } else if (fuelQuantity < 20){
        finalPriceWithoutDiscount = (fuelPrice * 1).toFixed(2);
        finalPrice = finalPriceWithoutDiscount;
    }

    console.log(`${finalPrice} lv.`);
}   

fuelTank2(["Gas", "21" , "Yes"]);