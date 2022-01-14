function backToThePast(input){
    let haritage = Number(input[0]);
    let lastYearOfLiving = Number(input[1]);
    let yearsOfIvan = 18;

    for ( let i = 1800; i <= lastYearOfLiving; i++){
        if ( i % 2 === 0){
            haritage -= 12000;
        } else {
            haritage -= (12000 + (yearsOfIvan * 50));
        }
        yearsOfIvan++;
    }

    if(haritage >= 0){
        console.log(`Yes! He will live a carefree life and will have ${(haritage.toFixed(2))} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(haritage).toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["100000.15", "1808"])