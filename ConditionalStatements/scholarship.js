function scholarShip(input) {
  let earnings = Number(input[0]);
  let averageSuccess = Number(input[1]);
  let minSalary = Number(input[2]);

  let socialScholarShip = 0.0;
  let excellentScholarShip = 0.0;

  if (minSalary > earnings && averageSuccess > 4.50) {
    socialScholarShip = Math.floor(minSalary * 0.35);
  } 
  if (averageSuccess >= 5.50) {
    excellentScholarShip = Math.floor(averageSuccess * 25);  
  } 
  if(minSalary <= earnings && averageSuccess < 5.50) {
    console.log("You cannot get a scholarship!");
  } else if(averageSuccess <= 4.50){
    console.log("You cannot get a scholarship!");
  } else if (socialScholarShip > excellentScholarShip) {
    console.log(`You get a Social scholarship ${socialScholarShip} BGN`);
  } else if (excellentScholarShip >= socialScholarShip){
    console.log(
      `You get a scholarship for excellent results ${excellentScholarShip} BGN`);
  }
}

scholarShip(["300.00", "5.65", "420.00"]);