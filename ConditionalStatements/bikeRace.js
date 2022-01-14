function bikeRace(input){
    let juniourCount = Number(input[0]);
    let seniorCount = Number(input[1]);
    let routeType = (input[2]);

    let racersTax = 0.00;
    let racerCount = juniourCount + seniorCount;

    switch(routeType){
        case "trail":
            racersTax = (juniourCount * 5.50) + (seniorCount * 7);
            break;
        case "cross-country":
            if(racerCount >= 50){
                racersTax = ((juniourCount * 8) + (seniorCount * 9.50)) * 0.75;
            } else if (racerCount < 50){
                racersTax = (juniourCount * 8) + (seniorCount * 9.50);
            }
            break;
        case "downhill":
            racersTax = (juniourCount * 12.25) + (seniorCount * 13.75);
            break;
        case "road":
            racersTax = (juniourCount * 20) + (seniorCount * 21.50);
            break;
    }

    let donationSum = racersTax - (racersTax * 0.05);

    console.log(donationSum.toFixed(2));
}

bikeRace(["30 ","25","cross-country"])