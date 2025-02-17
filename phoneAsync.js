// GOOD RESULT GOT I-PHONE OR NOTHING

const myResult = async (isGood) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGood) {
                resolve("yeah you a got a iphone baby.")
            } else {
                reject(new Error("Seriously you failed 😒"))
            }
        }, 1000)
    });
};

await myResult();