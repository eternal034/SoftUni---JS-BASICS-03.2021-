function examPreparation(input){
    let argumentFailGrades = Number(input[0]);
    let failGrades = 0;
    let sumOfGrades = 0;
    let lastProblem = "";
    let gradesCounter = 0;
    let index = 1;

    while (failGrades < argumentFailGrades){
        let command = input[index++];
        let currentGrade = Number(input[index]);

        if(currentGrade <= 4){
            failGrades++;
        }

        if (command === "Enough"){
            lastProblem = input[input.length - 3];
            let averageGrade = sumOfGrades / gradesCounter;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${gradesCounter}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        gradesCounter++;
        sumOfGrades += currentGrade;

        index++;
    }
    if(failGrades === argumentFailGrades){
    console.log(`You need a break, ${failGrades} poor grades.`);
    }

}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])