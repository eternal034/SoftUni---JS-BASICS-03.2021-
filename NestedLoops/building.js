function building(input){
    let floors = Number(input[0]);
    let apartments = Number(input[1]);

    for(let a = floors; a > 0; a--){
        let result = "";
        for(let b = 0; b < apartments; b++){
            if(a === floors){
                result += `L${a}${b} `;
            } else if(a % 2 === 0){
                result += `O${a}${b} `;
            } else {
                result += `A${a}${b} `;
            }
        }
        console.log(result);
    }
}

building(["6", "4"]);