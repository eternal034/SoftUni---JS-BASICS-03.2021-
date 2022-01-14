function fruitShop(input){
    let fruitType = input[0];
    let dayOfTheWeek = input[1];
    let fruitQuantity = Number(input[2]);

    let bill = 0.00;
    let workDay = false;
    let weekend = false;

    if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
        weekend = true;
    } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday"){
        workDay = true;
    } else {
        console.log("error");
    }

    if(workDay){
        switch(fruitType){
            case "banana":
                console.log((fruitQuantity * 2.50).toFixed(2)); 
                break;
            case "apple":
                console.log((fruitQuantity * 1.20).toFixed(2));
                break;
            case "orange":
                console.log((fruitQuantity * 0.85).toFixed(2));
                break;
            case "grapefruit":
                console.log((fruitQuantity * 1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((fruitQuantity * 2.70).toFixed(2));
                break;
            case "pineapple":
                console.log((fruitQuantity * 5.50).toFixed(2));
                break;
            case "grapes":
                console.log((fruitQuantity * 3.85).toFixed(2));
                break;
            default : 
                console.log("error");
        }
    } else if(weekend){
        switch(fruitType){
            case "banana":
                console.log((fruitQuantity * 2.70).toFixed(2)); 
                break;
            case "apple":
                console.log((fruitQuantity * 1.25).toFixed(2));
                break;
            case "orange":
                console.log((fruitQuantity * 0.90).toFixed(2));
                break;
            case "grapefruit":
                console.log((fruitQuantity * 1.60).toFixed(2));
                break;
            case "kiwi":
                console.log((fruitQuantity * 3.00).toFixed(2));
                break;
            case "pineapple":
                console.log((fruitQuantity * 5.60).toFixed(2));
                break;
            case "grapes":
                console.log((fruitQuantity * 4.20).toFixed(2));
                break;
            default : 
                console.log("error"); 
        }
    }
}    


fruitShop(["banana",
"Mdadada",
"0.5"])