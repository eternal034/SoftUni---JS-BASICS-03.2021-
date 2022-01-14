function classAnimal(input){
    let typeAnimal = (input[0]);
    
    // ⦁	dog -> mammal ⦁	crocodile, tortoise, snake -> reptile ⦁	others -> unknown

    switch (typeAnimal){
        case "dog": 
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break
        default: 
            console.log("unknown");
            break
    }
}
classAnimal(["snake"])