function sumОfNumbers(input){
    let num = (input[0]);
    let sum = 0.00;

    for (let i = 0; i < num.length; i++){
        let n = Number(num[i]);
        sum += n;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumОfNumbers(["1234"])