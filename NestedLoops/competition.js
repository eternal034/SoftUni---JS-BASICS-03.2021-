function competition(input){
    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalMoney = 0;
    let totalWinCount = 0;
    let totalLoseCount = 0;

    for(let i = 1; i <= days; i++){
        let command = input[index++];
        let tempMoney = 0;
        let tempWinCount = 0;
        let tempLoseCount = 0;
        while(command !== "Finish"){
            let sportType = command;
            let result = input[index++];
            if(result === "win"){
                tempMoney += 20;
                tempWinCount++;
            } else {
                tempLoseCount++;
            }

            command = input[index++];
        }
        if (tempWinCount > tempLoseCount){
            tempMoney *= 1.10;
            totalWinCount++;
        } else {
            totalLoseCount++;
        }
        totalMoney += tempMoney;
    }
    if(totalWinCount > totalLoseCount){
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}

competition([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])