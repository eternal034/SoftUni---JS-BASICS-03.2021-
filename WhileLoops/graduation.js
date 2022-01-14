function graduation(input){
    let index = 0;
    let name = input[index];
    index++;

    let grade = 1;
    let averageGrade = 0;
    let excludedCounter = 0;
    let isExcluded = false;
    while (grade <= 12){
        let yearGrade = Number(input[index]);
        index++;
        if(yearGrade >= 4.00){
            grade++;
            averageGrade += yearGrade;
            continue;
        } else {
            excludedCounter++;
        }

        if(excludedCounter === 2){
            isExcluded = true;
            console.log(`${name} has been excluded at ${grade} grade`);
            break;
        }
    }
    averageGrade = averageGrade / 12;
    
    if(!isExcluded){
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])