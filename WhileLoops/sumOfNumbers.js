function sumOfNumbers(input){
    let num = Number(input[0]);
    let sum = 0;
    let index = 1;

    while(num > sum){
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;    
    }
    console.log(sum);
}

sumOfNumbers(["100","10","20","30","40"])