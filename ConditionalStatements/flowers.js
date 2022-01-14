function flowers(input){
    let chrysanthemumsCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = (input[3]);
    let isHoliday = (input[4]);

    let arrangingPrice = 2;
    let holiday = false;
    let chrysanthemumsPrice = 0.00;
    let rosesPrice = 0.00;
    let tulipsPrice = 0.00;
    let bouquetPrice = 0.00;


    if(isHoliday === "Y"){
        holiday = true
    } else if (isHoliday === "N"){
        holiday = false;
    }

    switch(season){
        case "Spring":
        case "Summer":
            if(holiday){
                chrysanthemumsPrice = (chrysanthemumsCount * 2.00) * 1.15;
                rosesPrice = (rosesCount * 4.10) * 1.15;
                tulipsPrice = (tulipsCount * 2.50) * 1.15;
                bouquetPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            } else if(holiday === false){
                chrysanthemumsPrice = (chrysanthemumsCount * 2.00)
                rosesPrice = (rosesCount * 4.10)
                tulipsPrice = (tulipsCount * 2.50)
                bouquetPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            }
            break;
        case "Winter":
        case "Autumn":
            if(holiday){
                chrysanthemumsPrice = (chrysanthemumsCount * 3.75) * 1.15;
                rosesPrice = (rosesCount * 4.50) * 1.15;
                tulipsPrice = (tulipsCount * 4.15) * 1.15;
                bouquetPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            } else if(holiday === false){
                chrysanthemumsPrice = (chrysanthemumsCount * 3.75)
                rosesPrice = (rosesCount * 4.50)
                tulipsPrice = (tulipsCount * 4.15)
                bouquetPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            }
            break;
    }

    if(tulipsCount > 7 && season === "Spring"){
        bouquetPrice *= 0.95;
    } else if (rosesCount >= 10 && season === "Winter"){
        bouquetPrice *= 0.90;
    } 
    
    if ((chrysanthemumsCount + rosesCount + tulipsCount) > 20){
        bouquetPrice *= 0.80;
    }

    console.log((bouquetPrice + arrangingPrice).toFixed(2));
}

flowers(["10", "10", "10", "Autumn" ,"N"]);