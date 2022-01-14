function logistic(input) {
  let shipmentCount = Number(input[0]);
  let inputL = input.length;
  let sumOfShipment = 0;
  let vanShipment = 0;
  let vanCost = 0;
  let truckShipment = 0;
  let truckCost = 0;
  let trainShipment = 0;
  let trainCost = 0;

  for (let i = 1; i < inputL; i++) {
    let currentShipment = Number(input[i]);
    sumOfShipment += currentShipment;
    if (currentShipment <= 3) {
      vanShipment += currentShipment;
      vanCost += currentShipment * 200;
    } else if (currentShipment <= 11) {
      truckShipment += currentShipment;
      truckCost += currentShipment * 175;
    } else if (currentShipment >= 12) {
      trainShipment += currentShipment;
      trainCost += currentShipment * 120;
    }
  }
  let averageCost = ((vanCost + truckCost + trainCost) / sumOfShipment).toFixed(2);
  
  console.log(averageCost);
  console.log(`${((vanShipment / sumOfShipment) * 100).toFixed(2)}%`);
  console.log(`${((truckShipment / sumOfShipment) * 100).toFixed(2)}%`);
  console.log(`${((trainShipment / sumOfShipment) * 100).toFixed(2)}%`);
}

logistic(["5", "2", "10", "20", "1", "7"]);
