function equalSums(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let string = "";

    for(let i = a; i <= b; i++){
        let currentNum = i.toString();
        let evenSum = 0;
        let oddSum = 0;
        for( let j = 0; j < currentNum.length; j++){

            let num = Number(currentNum[j]);
            if (j % 2 === 0){
                evenSum += num;
            } else {
                oddSum += num;
            }
        }

        if (oddSum === evenSum){
            string += currentNum + " ";
        }
    }
    if(string.length > 0){
        console.log(string);
    }
}

equalSums(["100000","100050"]);