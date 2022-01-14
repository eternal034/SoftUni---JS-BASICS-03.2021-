function onTimeForExam(input){
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let comingHour = Number(input[2]);
    let comingMin = Number(input[3]);

    let onTime = false;
    let early = false;
    let late = false;

    let onTimeStatus = "On Time";
    let earlyStatus = "Early";
    let lateStatus = "Late";

    let examTime = (examHour * 60) + examMin;
    let comingTime = (comingHour * 60) + comingMin;
    let arivalStatus = "";

    if(comingTime > examTime){
        late = true;
        arivalStatus = lateStatus;
    }else if ((comingTime - examTime) >= -30){
        onTime = true;
        arivalStatus = onTimeStatus;
    } else if (comingTime - examTime < -30){
        early = true;
        arivalStatus = earlyStatus;
    }
    
    let result = "";
    let difference = 0.00;

    if (examTime === comingTime){
        arivalStatus = onTimeStatus;
    }
    
    if((onTime && examHour != comingHour) || (onTime && examMin != comingMin)){
        if((comingTime - examTime) < 60 && (examTime - comingTime) < 10){
            difference = Math.abs(comingTime - examTime);
            result = (`${difference} minutes before the start`);
        } else if((comingTime - examTime) < 60 && (examTime - comingTime) > 10){
            difference = Math.abs(comingTime - examTime);
            result = (`${difference} minutes before the start`);
        }
    }
    
    if ((early && examHour != comingHour) || (early && examMin != comingMin)){
            difference = Math.abs(comingTime - examTime);
                if(difference >= 60 && (difference % 60) < 10 ){
                    result = (Math.floor(difference / 60) + ":" + "0" + (difference % 60) +" " + "hours before the start");
                } else if (difference >= 60 && (difference % 60) > 10 ){
                    result = (Math.floor(difference / 60) + ":" + (difference % 60) +" " + "hours before the start");
                } else if ( difference < 60){
                    result = difference + " " + "minutes before the start";
                }
    }

    if ((late && examHour != comingHour) || (late && examMin != comingMin)){
        difference = Math.abs(examTime - comingTime);
            if(difference >= 60 && (difference % 60) < 10) {
                result = (Math.floor(difference / 60) + ":" + "0" + (difference % 60) + " " + "hours after the start");
            } else if (difference >= 60 && (difference % 60) > 10 ){
                result = (Math.floor(difference / 60) + ":" + (difference % 60) + " " +  "hours after the start");
            } else if ( difference < 60){
                result = difference + " " + "minutes after the start";
            }
}
    console.log(arivalStatus);
    console.log(result);
}


onTimeForExam(["10",
"00",
"10",
"00"])