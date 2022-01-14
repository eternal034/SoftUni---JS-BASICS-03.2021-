function passwordGuess (input){

    let filedPassword = (input[0]);
    let correctPassword = "s3cr3t!P@ssw0rd";

    if (filedPassword === correctPassword){
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    } 


}

passwordGuess(["s3cr3t!p@ss"]);