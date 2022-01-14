function uniquePin(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    let result = "";

    for(let i = 1; i <= n1; i++){
        if(i % 2 === 0){
            for(let j = 2; j <= n2; j++){
                let num = 2;
                if(((j / j === 1 && j % 2 !== 0 || j === num) || (j / j === 1 && j % 2 !== 0)) && (j >= 2 && j < 7)){
                    for(let k = 1; k <= n3; k++){
                        if(k % 2 === 0){
                                result = `${i} ${j} ${k}`;
                                console.log(result);
                        }
                    }
                }
            }
        }
    }
}

uniquePin(["3","9","5"]);