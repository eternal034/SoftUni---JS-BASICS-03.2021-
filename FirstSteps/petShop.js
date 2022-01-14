function petShop(input) {
    let dogs = Number(input[0]);
    let otherPets = Number(input[1]);

    let dogsFoodPrice = 2.5;
    let otherFoodPrice = 4;

    let totalFoodSum = dogs*dogsFoodPrice + otherPets*otherFoodPrice;

    console.log(totalFoodSum);

}

petShop(["5", "4"])