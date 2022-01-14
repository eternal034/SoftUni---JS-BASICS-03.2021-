function sleepyCatTom(input){
    let offDays = Number(input[0]);
    let sleepyMinPerYear = Number("30000");

    let workDays = Number(365 - offDays);
    let offDaysPlayMinutes = offDays * 127;
    let workDaysPlayMinutes = workDays * 63;

    let yearPlayMinutes = offDaysPlayMinutes + workDaysPlayMinutes;

    let differenceMinutes = 0.00;

    if(sleepyMinPerYear > yearPlayMinutes ){
        differenceMinutes = sleepyMinPerYear - yearPlayMinutes;
        console.log("Tom sleeps well");
        console.log(`${Math.floor(differenceMinutes / 60).toFixed(0)} hours and ${differenceMinutes % 60} minutes less for play`)
    } else {
        differenceMinutes = yearPlayMinutes - sleepyMinPerYear;
        console.log("Tom will run away");
        console.log(`${Math.floor(differenceMinutes / 60)} hours and ${differenceMinutes % 60} minutes more for play`);
    }

}
sleepyCatTom(["20"]);