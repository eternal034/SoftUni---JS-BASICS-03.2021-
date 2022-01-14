function trainTheTrainers(numArr) {
    let n = Number(numArr[0]);
    let index = 1;
    let allGradeCount = 0;
    let allGradeSum = 0;
 
    while (numArr[index] != "Finish") {
        let presentation = numArr[index];
        let gradesSum = 0;
        for (let i = 1; i <= n; i++) {
            let grade = Number(numArr[index + i]);
            gradesSum += grade;
            allGradeSum += grade;
            allGradeCount++;
        }
        console.log(`${presentation} - ${(gradesSum/n).toFixed(2)}.`);
        index+=n+1;
    }
 
    console.log(`Student's final assessment is ${(allGradeSum / allGradeCount).toFixed(2)}.`);
}

trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])