function matchTickets(input){
    let budget = Number(input[0]);
    let ticketType = (input[1]);
    let fansQuantity = Number(input[2]);

    let budgetLeft = 0.00;
    let ticketSum = 0.00;

    switch(ticketType){
        case "Normal":
            ticketSum = fansQuantity * 249.99;
            break;
        case "VIP":
            ticketSum = fansQuantity * 499.99;
            break;
    }

    if(fansQuantity >= 1 && fansQuantity <=4){
       budgetLeft = budget * 0.25;
    } else if (fansQuantity > 4 && fansQuantity <= 9){
        budgetLeft = budget * 0.40;
    } else if (fansQuantity > 9 && fansQuantity <=24){
        budgetLeft = budget * 0.50;
    } else if (fansQuantity > 24 && fansQuantity <= 49){
        budgetLeft = budget * 0.60;
    } else {
        budgetLeft = budget * 0.75;
    }

    if(ticketSum > budgetLeft){
        console.log(`Not enough money! You need ${(ticketSum - budgetLeft).toFixed(2)} leva.`);
    } else if (ticketSum <= budgetLeft){
        console.log(`Yes! You have ${(budgetLeft - ticketSum).toFixed(2)} leva left.`);
    }
}

matchTickets(["30000","VIP", "49"])