    function cake(input){
        let w = Number(input[0]);
        let l = Number(input[1]);
        let cakeVolume = w * l;
        let piecesTaken = 0;
        let command = input[2];
        let index = 3;

        while (command !== "STOP"){
            piecesTaken += Number(command);

            if(piecesTaken > cakeVolume){
                break;
            }

            command = (input[index]);
            index++;
        }

        if (piecesTaken > cakeVolume){
            console.log(`No more cake left! You need ${piecesTaken - cakeVolume } pieces more.`);
        } else {
           console.log(`${cakeVolume - piecesTaken} pieces are left.`); 
        }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])