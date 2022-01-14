function sumPrimeNonPrime(input){
    let index = 0;
    let primeNumSum = 0;
    let nonPrimeNumSum = 0;
    let command = input[index++];

    while(command !== "stop"){
        let currentNum = Number(command);
        if(currentNum < 0){
            console.log(`Number is negative.`);
        } else {
            let isPrime = true;
            for ( let i = 2; i < currentNum; i++){
                if(currentNum % i === 0 ){
                    isPrime = false;
                    break;
                }
            }

            if(isPrime){
                primeNumSum += currentNum;
            } else {
                nonPrimeNumSum += currentNum;
            }
        }

        command = input[index++];
    }

    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);
}

sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])