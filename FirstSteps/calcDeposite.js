function calculator(input) {
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let percent = Number(input[2]);
    let result = deposit + months*((deposit*percent/100) / 12);
    console.log(result);
}

calculator([200, 3, 5.7]);