function transport(input){
    let distance = Number(input[0]);
    let dayOrNight = (input[1]);

    let taxiDay = (0.70 + (distance * 0.79)).toFixed(2);
    let taxiNight = (0.70 + (distance * 0.90)).toFixed(2);
    let taxiPrice = 0.00;
    let bussPrice = 0.00;
    let trainPrice = 0.00;


    if(distance <= 20 && dayOrNight === "day"){
        taxiPrice = taxiDay;
        console.log(taxiPrice);
    } else if(distance <=20 && dayOrNight === "night"){
        taxiPrice = taxiNight;
        console.log(taxiPrice);
    }   
    
    if(distance > 20 && distance < 100){
        bussPrice = (distance * 0.09).toFixed(2);
        console.log(bussPrice);
    } else if(distance > 100){
        trainPrice = (distance * 0.06).toFixed(2);
        console.log(trainPrice);
    }
}

 transport(["180", "day"]);
