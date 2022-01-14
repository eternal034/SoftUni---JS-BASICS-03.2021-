function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let usedPercent = Number(input[3] * 0.01);
 
    let volume = length * width * height;
    let volumeInLitres = volume * 0.001;
    let usefulLitres = volumeInLitres * (1 - usedPercent);
 
    console.log(usefulLitres);
 
}

fishTank(["105", "77", "89","18.5"]);