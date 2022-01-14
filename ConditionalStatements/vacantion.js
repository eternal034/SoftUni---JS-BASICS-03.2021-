function vacantion(input){
    let budget = Number(input[0]);
    let season = (input[1]);

    let accommodation = "";
    let location = "";
    let vacantionPrice = 0.00;


    if(budget <= 1000){
        accommodation = "Camp";
        switch(season){
            case "Summer":
                location = "Alaska";
                vacantionPrice = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                vacantionPrice = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000){
        accommodation = "Hut";
        switch(season){
            case "Summer":
                location = "Alaska";
                vacantionPrice = budget * 0.80;
                break;
            case "Winter":
                location = "Morocco";
                vacantionPrice = budget * 0.60;
                break;
        }
    } else if (budget > 3000){
        accommodation = "Hotel";
        vacantionPrice = budget * 0.90;
        switch(season){
            case "Summer":
                location = "Alaska"; 
                break;
            case "Winter":
                location = "Morocco";
                break;
        }
    }

    console.log(`${location} - ${accommodation} - ${(vacantionPrice).toFixed(2)}`)

}

vacantion(["799.50","Winter"])