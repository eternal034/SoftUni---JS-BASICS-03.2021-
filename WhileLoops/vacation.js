function vacation(input){
    let targetSum = Number(input[0]);
    let startSum = Number(input[1]);
    let index = 2;
    let days = 0;
    let daysInSpending = 0;

    while (true) {
        let operation = input[index++];
        let amount = Number(input[index]);

        if (operation == "spend"){
            daysInSpending++;
            days++;
            if ( amount > startSum){
                startSum = 0;
            } else {
                startSum -= amount;
            }
        } else if ( operation == "save"){
            daysInSpending = 0;
            startSum += amount;
            days++;
        }

        if (daysInSpending === 5){
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }

        if (startSum >= targetSum){
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }
}

vacation(["2000","1000","spend","1200","save","2000"])