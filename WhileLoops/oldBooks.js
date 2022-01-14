function oldBooks(input){
    let favoriteBook = input[0];
    let index = 1;
    let command = input[index];
    index++;
    let bookIsFound = false;
    let checkedBooks = 0;

    while (command !== "No More Books"){
        if (command === favoriteBook){
            bookIsFound = true;
            break;
        }
        command = (input[index++]);
        checkedBooks++;
    }

    if (bookIsFound === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`)
    } else {
        console.log(`You checked ${checkedBooks} books and found it.`)
    }
}

oldBooks(["Troy","Stronger","Life Style","Troy"])