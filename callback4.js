const hello = (data, callback) => {
    setTimeout(() => {
        console.log("Data : ", data);
        callback();
    }, 1000)
};

hello(2, () => {
    hello(3, () => {
        hello(4, () => {
            hello(5, () => {
                console.log("finished")
            })
        })
    })
})