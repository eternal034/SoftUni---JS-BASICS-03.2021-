function newWorldRecord(input){

    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let delay = Math.floor(distance / 15) * 12.5;

    let totalTime = (distance*timeForMeter) + delay;

    if(totalTime >= recordTime){
        console.log(`No, he failed! He was ${(totalTime - recordTime).toFixed(2)} seconds slower.`);
    }else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}

newWorldRecord(["55555.67" , "3017", "5.03"]);