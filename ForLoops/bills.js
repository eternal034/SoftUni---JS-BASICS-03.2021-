function bills(input){
    let months = Number(input[0]);
    let water = 20;
    let net = 15;

    let totalWater = months * 20;
    let totalNet = months * 15;
    let totalEl = 0;
    let otherBills = 0;
    
    for ( let i = 1; i <= months; i++){
        let currentMonthEl = Number(input[i]);
        totalEl += currentMonthEl;
        otherBills += (currentMonthEl + water + net) * 1.2;
    }

    let averageBill = (totalEl + totalNet + totalWater + otherBills) / months;

    console.log(`Electricity: ${totalEl.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalNet.toFixed(2)} lv`);
    console.log(`Other: ${otherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageBill.toFixed(2)} lv`)
}

bills(["5","68.63","89.25","132.53","93.53","63.22"])