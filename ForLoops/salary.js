function salaryEx(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);
  let inputL = input.length;

  for (let i = 2; i <= inputL; i++) {
    let currentTab = input[i];
    switch (currentTab) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
  }

    if(salary <= 0){
        console.log(`You have lost your salary.`);
    } else {
        console.log(Math.floor(salary));
    }
}

salaryEx([
  "1",
  "1500",
  "Facebook"
]);
