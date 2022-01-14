function tradeCommissions(input){
    let city = (input[0]);
    let sales = Number(input[1]);

    let commissions = 0.00;

    if(sales >= 0 && sales <= 500){
        switch(city){
            case "Sofia":
                commissions = sales * 0.05;
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * 0.045;
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * 0.055;
                console.log(commissions.toFixed(2));
                break;
            default: console.log("error"); break;
        }
    } else if(sales > 500 && sales <= 1000){
        switch(city){
            case "Sofia":
                commissions = sales * 0.07;
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * 0.075;
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * 0.08;
                console.log(commissions.toFixed(2));
                break;
            default: console.log("error"); break;
        }
    } else if(sales >  1000 && sales <=10000){
        switch(city){
            case "Sofia":
                commissions = sales * 0.08;
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * 0.1;
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * 0.12;
                console.log(commissions.toFixed(2));
                break;
            default: console.log("error"); break;
        }
    } else if(sales > 10000){
        switch(city){
            case "Sofia":
                commissions = sales * 0.12;
                console.log(commissions.toFixed(2));
                break;
            case "Varna":
                commissions = sales * 0.13;
                console.log(commissions.toFixed(2));
                break;
            case "Plovdiv":
                commissions = sales * 0.145;
                console.log(commissions.toFixed(2));
                break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}

tradeCommissions(["Varna",
"0"])