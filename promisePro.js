const promise = (success) => {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("yes")
        } else {
            reject(new Error("Something went to wrong."));
        }
    });
}
promise(false)
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log(err.message)
    })
    .finally(() => {
        console.log("finally")
    })