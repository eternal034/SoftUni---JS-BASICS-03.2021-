function stream(input){
    let index = 0;
    let letter = input[index];

    let nCounter = false;
    let cCounter = false;
    let oCounter = false;
    let newWord = "";
    let message = "";

    while(letter !== "End"){
        letter = input[index];
        let firstCondition = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
        let secondCondition = letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;

        if(firstCondition || secondCondition){
            switch (letter){
                case "n":;
                if(nCounter){
                    newWord += letter;
                }
                nCounter = true;
                break;
                case "c":
                if(cCounter){
                    newWord += letter;
                }
                cCounter = true;
                break;
                case "o":
                if(oCounter){
                    newWord += letter;
                }
                oCounter = true;
                break;
                default: newWord += letter;
            }

            if (nCounter && cCounter && oCounter){
                message += `${newWord}`;
                newWord = " ";
                nCounter = false;
                cCounter = false;
                oCounter = false;
            }
        }
        index++;
    }
    console.log(message);
}

stream(["H","n","e","l","(","l","o","o","c","t","c","h","o","e","r","e","n","e","End"])