function divideWithoutRemainder(input){
    let numCount = Number(input[0]);
    let inputL = input.length;
    
    let p1 = 0.00;
    let p2 = 0.00;
    let p3 = 0.00;
    let p4 = 0.00;
    let p5 = 0.00;

    for ( let i = 1; i <= inputL; i++){
        let currentNum = Number(input[i]);

        if (currentNum % 2 === 0){
            p1++;
        }
        if (currentNum % 3 == 0){
            p2++;
        }
        if (currentNum % 4 === 0){
            p3++;
        }
    }
    console.log(`${(p1/numCount * 100).toFixed(2)}%`);
    console.log(`${(p2/numCount * 100).toFixed(2)}%`);
    console.log(`${(p3/numCount * 100).toFixed(2)}%`);
}

divideWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])