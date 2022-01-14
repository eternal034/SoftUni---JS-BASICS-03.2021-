function histogram(input){

    let numCount = Number(input[0]);
    let inputL = input.length;

    let p1 = 0.00;
    let p2 = 0.00;
    let p3 = 0.00;
    let p4 = 0.00;
    let p5 = 0.00;

    for (let i = 1; i <= inputL; i++){
        let currentNum = Number(input[i]);

        if(currentNum < 200){
            p1++;
        } else if (currentNum <= 399){
            p2++;
        } else if (currentNum <= 599){
            p3++;
        } else if (currentNum <= 799){
            p4++;
        } else if (currentNum >= 800){
            p5++;
        }
    }

    console.log(`${(p1/numCount*100).toFixed(2)}%`);
    console.log(`${(p2/numCount*100).toFixed(2)}%`);
    console.log(`${(p3/numCount*100).toFixed(2)}%`);
    console.log(`${(p4/numCount*100).toFixed(2)}%`);
    console.log(`${(p5/numCount*100).toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);