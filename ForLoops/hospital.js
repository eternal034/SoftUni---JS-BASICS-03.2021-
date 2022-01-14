function hospital(input){
    let period = Number(input[0]);
    let treated = 0.00;
    let untreated = 0.00;
    let doctors = 7;

    for ( let day = 1; day <= period; day++){
        let currentCount = Number(input[day]);

        if ((day % 3 === 0) && untreated > treated){
            doctors++;
        }

        if (currentCount > doctors){
            treated += doctors;
            untreated += currentCount - doctors;
        } else {
            treated += currentCount;
        }
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

hospital(["4","7","27","9","1"]);