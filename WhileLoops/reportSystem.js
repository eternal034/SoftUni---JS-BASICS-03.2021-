function reportSystem(input) {
  let expectedSum = Number(input[0]);
  let sum = 0;
  let index = 1;

  let transactions = 0;
  let cashSold = 0;
  let cardSold = 0;
  let cashTransaction = 0;
  let cardTransaction = 0;

  while (sum < expectedSum) {
    let command = input[index];
    transactions++;

    if (command === "End") {
      console.log(`Failed to collect required money for charity.`);
      break;
    }
    let currentSum = Number(command);

    if (transactions % 2 === 0) {
      if (currentSum < 10) {
        console.log(`Error in transaction!`);
      } else if (currentSum >= 10) {
        console.log(`Product sold!`);
        cardTransaction++;
        sum += currentSum;
        cardSold += currentSum;
      }
    } else {
      if (currentSum > 100) {
        console.log(`Error in transaction!`);
      } else if ( currentSum <= 100){
          console.log(`Product sold!`);
          cashTransaction++;
          sum += currentSum;
          cashSold += currentSum;
      }
    }

    index++;

  }

  let averageCashTransaction = cashSold / cashTransaction;
  let averageCardTransaction = cardSold / cardTransaction;

  if(sum >= expectedSum){
    console.log(`Average CS: ${averageCashTransaction.toFixed(2)}`);
    console.log(`Average CC: ${averageCardTransaction.toFixed(2)}`);
  }

}

reportSystem(["500", "120", "8", "63", "End"]);
