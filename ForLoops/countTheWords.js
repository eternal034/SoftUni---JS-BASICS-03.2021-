function countTheWords(input){
    let message = (input[0]);
    let messageL = message.length;
    let spaceCount = 0.00;
    
    for ( let i = 0; i < messageL; i++){
        let ch = (message[i]);
            if ( ch == " "){
                spaceCount++;
            }
    }
    let wordsCount = spaceCount + 1;

    if ( wordsCount <= 10){
        console.log("The message was sent successfully!");
    }  else {
        console.log(`The message is too long to be send! Has ${wordsCount} words.`);
    }
    
}

countTheWords(["This message has exactly eleven words. One more as it's allowed!"])