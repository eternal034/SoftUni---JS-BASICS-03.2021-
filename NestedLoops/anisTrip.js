function anisTrip(input){
    let index = 0;
    let command = input[index];
    
    while(command !== "End"){
        let destination = (input[index++]);
        let minSumForTrip = (input[index++]);
        let totalSavings = 0;

        while(minSumForTrip > totalSavings){
            let currentSaving = Number(input[index++])
            totalSavings += currentSaving;
        }
        if(totalSavings >= minSumForTrip){
            console.log(`Going to ${destination}!`);
        } else{
            break;
        }
    }
}

anisTrip(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
