exports.processData = function (birthDay, lifeExp) {
    let birthDate = new Date(birthDay);
    let lastDate = new Date(birthDay);
    lastDate.setFullYear(birthDate.getFullYear() + lifeExp);
    let currDate = new Date();
    let newTime_ms = 0
    let newTime = new Date();
    let newTime1 = new Date();
    let fillBlock = 0;
    let totalBlock = -1;
    let fromDates = [];
    let toDates = [];
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    while (newTime_ms < lastDate.getTime()) {
        newTime_ms = birthDate.getTime() + (1000 * 60 * 60 * 24 * 7 * (totalBlock + 1));
        newTime.setTime(newTime_ms);
        fromDates.push(newTime.toLocaleDateString("US-EN", options));
        newTime1.setTime(newTime_ms + (1000 * 60 * 60 * 24 * 6));
        toDates.push(newTime1.toLocaleDateString("US-EN", options));
        if (currDate.getTime() > newTime_ms) {
            fillBlock++;
        }
        totalBlock++;
    }
    return {
        totalBlock:totalBlock,
        fillBlock: fillBlock,
        fromDates: fromDates,
        toDates: toDates
    };
}

// "Bruh you are dead - if life expectancy is exceeded the current year"