function harvest(input){
    let vinesM2 = Number(input[0]);
    let grapeM2 = Number(input[1]);
    let vineForSale = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrape = vinesM2 * grapeM2;
    let totalVine = (totalGrape * 0.4) / 2.5;

    let neededVineMore = 0.00;
    let overVineMore = 0.00;
    let vineForWorkers = 0.00;

    if(totalVine < vineForSale){
        neededVineMore = Math.floor(vineForSale - totalVine);
        console.log(`It will be a tough winter! More ${neededVineMore} liters wine needed.`)
    } else {
        overVineMore = Math.ceil(totalVine - vineForSale);
        vineForWorkers = Math.ceil(overVineMore / workers);
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalVine)} liters.`);
        console.log(`${overVineMore} liters left -> ${vineForWorkers} liters per person.`);
    }
}

harvest(["650", "2","175", "3"]);