function personalTitles(input){
    let age = Number(input[0]);
    let gander = (input[1]);

    if(gander === "m"){
        if (age >= 16){
            console.log("Mr.");
        }else {
            console.log("Master"); 
        }
    } else
        if ( gander === "f"){
            if(age >= 16){
                console.log("Ms.");      
        }   else {
            console.log("Miss");
        }
    }
}
personalTitles(["17" , "f"]);