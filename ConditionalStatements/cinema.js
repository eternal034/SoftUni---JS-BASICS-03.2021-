function cinema(input){
    let prejectionType = (input[0]);
    let rows = Number(input[1]);
    let colums = Number(input[2]);

    let seats = rows * colums;
    let projectionPrice = 0.00;
    let income = 0.00;

    switch(prejectionType){
        case "Premiere":
            projectionPrice = 12;
            income = seats * projectionPrice;
                break;
        case "Normal":
            projectionPrice = 7.50;
            income = seats * projectionPrice;
                break;
        case "Discount":
            projectionPrice = 5.00;
            income = seats * projectionPrice;
                break;
    }
    console.log(`${income.toFixed(2)} leva`)
}

cinema(["Premiere", "10", "12"]);