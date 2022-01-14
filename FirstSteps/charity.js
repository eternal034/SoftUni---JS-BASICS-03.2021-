function charity(input) {
    let cakePrice = Number(45);
    let gofrettePrice = Number(5.80);
    let pancakePrice = Number(3.20);

    let campanyLenght = Number(input[0]);
    let chefs = Number(input[1]);
    let cakes = Number(input[2]);
    let gofrettes = Number(input[3]);
    let pancakes = Number(input[4]);

    let sumPerDay = (chefs * (cakePrice*cakes + gofrettePrice*gofrettes + pancakePrice*pancakes));
    
    let sumPerCampany = (sumPerDay * campanyLenght);
    let finalSum = sumPerCampany - (sumPerCampany / 8);
    console.log(finalSum);
}
charity([23,8,14,30,16]);