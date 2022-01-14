function yardGreening(input) {
    let squareMeterPrice = 7.61;
    let squareMeterQuantity = Number(input[0]);

    let greeningPrice = squareMeterPrice*squareMeterQuantity;
    let discount = greeningPrice * 0.18;

    let sumForPayment = greeningPrice - discount;

    console.log(`The final price is: ${sumForPayment} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])