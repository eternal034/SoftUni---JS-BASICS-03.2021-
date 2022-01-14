function grades(input){
    let studentsCount = Number(input[0]);
    let sumOfGrades = 0;
    let excellentGrade = 0;
    let goodGrade = 0;
    let middleGrade = 0;
    let faillGrade = 0;

    for ( let grade = 1; grade < studentsCount; grade++){
        let currentGrade = Number(input[grade]);
        sumOfGrades += currentGrade;
        if (currentGrade >= 5){
            excellentGrade++;
        } else if (currentGrade >= 4.00 && currentGrade <= 4.99){
            goodGrade++;
        } else if (currentGrade >= 3.00 && currentGrade <= 3.99){
            middleGrade++;
        } else if (currentGrade < 3.00){
            faillGrade++;
        }
    }

    let averageGrade = sumOfGrades / studentsCount;

    console.log(`Top students: ${(excellentGrade/studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(goodGrade/studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(middleGrade/studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(faillGrade/studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"])