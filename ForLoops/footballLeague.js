function footballLeague(input){
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);
    let inputL = input.length;

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let sector = 2; sector < inputL; sector++){
        let currentSector = String(input[sector]);
        if (currentSector === "A"){
            sectorA++;
        } else if (currentSector === "B"){
            sectorB++;
        } else if (currentSector === "V"){
            sectorV++;
        } else if (currentSector === "G"){
            sectorG++;
        }
    }

    console.log(`${(sectorA / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorB / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorV / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorG / fansCount * 100).toFixed(2)}%`);
    console.log(`${(fansCount / stadiumCapacity * 100).toFixed(2)}%`);
}


footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"]);