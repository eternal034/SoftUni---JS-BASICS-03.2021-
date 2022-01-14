function toyShop(input){
    let price = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCunt = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minnionCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toyCount = puzzleCount + dollsCunt + bearsCount + minnionCount + trucksCount;
    let money = puzzleCount * 2.6 + dollsCunt * 3 + bearsCount * 4.10 + minnionCount * 8.20 + trucksCount * 2;

    if (toyCount >= 50){
        money = money*0.75
    }

        money = money * 0.90;

    if (money >= price){
        let diff = money - price;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }   else {
        let diff = Math.abs(money - price);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);