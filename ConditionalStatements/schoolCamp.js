function schoolCamp(input){
    let season = (input[0]);
    let groupType = (input[1]);
    let studientsCount = Number(input[2]);
    let nights = Number(input[3]);

    let vacantionType = "";
    let vacantionPrice = 0.00;

    if(season === "Spring"){
        vacantionType = "SpringVacantion";
    } else if(season === "Summer"){
        vacantionType = "SummerVacantion";
    } else if(season === "Winter"){
        vacantionType = "WinterVacantion";
    }

    if (vacantionType === "SpringVacantion"){
        switch(groupType){
            case "boys":
            case "girls":
                vacantionPrice = studientsCount * (nights * 7.20);
                break;
            case "mixed":
                vacantionPrice = studientsCount * (nights * 9.50);
                break;
        }
    } else if (vacantionType === "SummerVacantion"){
        switch(groupType){
            case "boys":
            case "girls":
                vacantionPrice = studientsCount * (nights * 15);
                break;
            case "mixed":
                vacantionPrice = studientsCount * (nights * 20);
                break;
        }
    } else if (vacantionType === "WinterVacantion"){
        switch(groupType){
            case "boys":
            case "girls":
                vacantionPrice = studientsCount * (nights * 9.60);
                break;
            case "mixed":
                vacantionPrice = studientsCount * (nights * 10);
                break;
        }
    }

    if (studientsCount >= 50){
        vacantionPrice *= 0.50;
    } else if (studientsCount >= 20 && studientsCount < 50){
        vacantionPrice *= 0.85;
    } else if (studientsCount >=10 && studientsCount < 20){
        vacantionPrice *= 0.95;
    }

    let sport = "";

    if(groupType === "girls"){
        switch(vacantionType){
            case "SpringVacantion":
                sport = "Athletics";
                break;
            case "SummerVacantion":
                sport = "Volleyball";
                break;
            case "WinterVacantion":
                sport = "Gymnastics";
                break;
        }
    } else if (groupType === "boys"){
        switch(vacantionType){
            case "SpringVacantion":
                sport = "Tennis";
                break;
            case "SummerVacantion":
                sport = "Football";
                break;
            case "WinterVacantion":
                sport = "Judo";
                break;
        }
    } else if (groupType === "mixed"){
        switch(vacantionType){
            case "SpringVacantion":
                sport = "Cycling";
                break;
            case "SummerVacantion":
                sport = "Swimming";
                break;
            case "WinterVacantion":
                sport = "Ski";
                break;
        }
    }

    console.log(`${sport} ${(vacantionPrice).toFixed(2)} lv.`)

}

schoolCamp(["Winter","mixed","9","15"])