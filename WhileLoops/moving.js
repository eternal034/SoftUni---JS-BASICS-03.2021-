function moving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;
    
    let apartmentVolume = w * l * h;

    let command = input[index];
    index++;

    while (command !== "Done"){
        let box = Number(command);
        apartmentVolume -= box;

        if(apartmentVolume < 0){
            console.log(`No more free space! You need ${Math.abs(apartmentVolume)} Cubic meters more.`)
            break;
        }

        command = input[index];
        index++;
    }
    if (apartmentVolume >= 0){
        console.log(`${apartmentVolume} Cubic meters left.`);
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])