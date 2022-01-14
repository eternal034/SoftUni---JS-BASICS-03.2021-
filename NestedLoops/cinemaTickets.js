function cinemaTickets(input){
    let index = 0;
    let command = input[index++];
    let totalTicket = 0;
    let studentTicketCount = 0;
    let standartTicketCount = 0;
    let kidTicketCount = 0;

    while(command !== "Finish"){
        let FilmName = command;
        let freeSpace = Number(input[index++]);

        let typeTicket = input[index++];
        let counterTicket = 0;
        while(typeTicket !== "End"){
            counterTicket++;
            switch(typeTicket){
                case "student": studentTicketCount++;
                break;
                case "standard": standartTicketCount++;
                break;
                case "kid": kidTicketCount++;
                break;
            }

            if (counterTicket >= freeSpace){
                break;
            }

            typeTicket = input[index++];
        }

        totalTicket += counterTicket;
        let result = counterTicket / freeSpace * 100;
        console.log(`${FilmName} - ${result.toFixed(2)}% full.`);
        command = input[index++];
    }

    let totalStudentTicket = (studentTicketCount / totalTicket * 100).toFixed(2);
    let totalStandardTicket = (standartTicketCount / totalTicket * 100).toFixed(2);
    let totalKidTicket = (kidTicketCount / totalTicket * 100).toFixed(2);

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${totalStudentTicket}% student tickets.`);
    console.log(`${totalStandardTicket}% standard tickets.`);
    console.log(`${totalKidTicket}% kids tickets.`);
}

cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"])