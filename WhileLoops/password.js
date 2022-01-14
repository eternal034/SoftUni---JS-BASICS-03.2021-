function password(input){
    let userName = input[0];
    let passWord = input[1];
    let index = 2;
    let data = input[index];
    index++;

    while (data !== passWord){
        data = input[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])