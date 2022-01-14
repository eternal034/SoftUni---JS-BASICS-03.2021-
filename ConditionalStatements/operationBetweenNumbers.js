function operationBetweenNumbers(input){
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operation = (input[2]);

    let result = 0.00;

    switch(operation){
        case "+":
            if((N1 + N2) % 2 === 0){
                result = N1 + N2;
                console.log(`${N1} + ${N2} = ${result} - even`);
            } else {
                result = N1 + N2;
                console.log(`${N1} + ${N2} = ${result} - odd`);
            } break;
        case "-":
            if((N1 - N2) % 2 === 0){
                result = N1 - N2;
                console.log(`${N1} - ${N2} = ${result} - even`);
            } else {
                result = N1 - N2;
                console.log(`${N1} - ${N2} = ${result} - odd`);
            } break;
        case "*":
            if((N1 * N2) % 2 === 0){
                result = N1 * N2;
                console.log(`${N1} * ${N2} = ${result} - even`);
            } else {
                result = N1 * N2;
                console.log(`${N1} * ${N2} = ${result} - odd`);
            } break;
        case "/":
            if( N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                result = N1 / N2;
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
            } break;
        case "%":
            if( N2 === 0){
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                result = N1 % N2;
                console.log(`${N1} % ${N2} = ${result}`);
            } break;
    }
}

operationBetweenNumbers(["10", "12", "+"])