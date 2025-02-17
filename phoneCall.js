// GOOD RESULT GOT I-PHONE OR NOTHING
const MyResult = (callback) => {
    const isGood = true;
    callback(isGood)
};

const prize = (isGood) => {
    setTimeout(() => {
        if (isGood) {
            console.log("yeah you got a iphone")
        } else {
            console.log("What is this, sujon 😒")
        };
    }, 2000)
};

MyResult(prize)