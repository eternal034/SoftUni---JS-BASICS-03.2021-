function fishLand(input){
    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let horseMackerelKg = Number(input[3]);
    let musselKg = Number(input[4]);
    let musselPrice = Number("7.50");

    let bonitoPrice = mackerelPrice + (mackerelPrice * 0.60);
    let horseMackerelPrice = spratPrice + (spratPrice * 0.80);
    
    let bill = (bonitoKg*bonitoPrice) + (horseMackerelKg*horseMackerelPrice) + (musselKg*musselPrice);

    console.log(bill.toFixed(2));



}
fishLand([6.90, 4.20, 1.5, 2.5, 1]);
