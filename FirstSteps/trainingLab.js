function trainingLab(input) {
    let lenght = Number(input[0]) * 100;
    let width = Number(input[1] - 1) * 100;
    let usedPlaces = Number(input[2]);

    let usedAreaByDesk = Number(70);
    let usedAreaByWorkPlace = Number(120);
    
    let rowQuantity = Math.floor(lenght / usedAreaByWorkPlace);
    let deskPerRow = Math.floor(width / usedAreaByDesk);

    let workPlacesQuantity = (rowQuantity * deskPerRow) - usedPlaces;

    console.log(workPlacesQuantity);


}   
trainingLab([15, 8.9, 3]);