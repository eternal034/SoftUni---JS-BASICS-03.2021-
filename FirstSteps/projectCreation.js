function projCreat (input){
    let projHours = "3";
    let archName = input[0];
    let projQuant = input[1];
    let needHours = projHours * projQuant;
    console.log(`The architect ${archName} will need ${needHours} hours to complete ${projQuant} project/s. `);

    
}

projCreat(["George" , "4"]);