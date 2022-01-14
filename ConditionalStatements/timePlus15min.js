function timePlus15min(input){
    let hour = Number(input[0]);
    let mins = Number(input[1]) + 15;

    if (mins >= 60){
        hour = hour + 1;
        mins = mins - 60;
    }

    if (hour >= 24){
        hour = hour - 24;
    }

    if (mins < 10){
        console.log(`${hour}:0${mins}`);
    }else {
        console.log(`${hour}:${mins}`)
    }
}

timePlus15min(["23", "46"]);