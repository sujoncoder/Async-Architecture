const display = (some) => {
    console.log(some)
};

const calculation = (num1, num2) => {
    const result = num1 + num2
    return result;
};

const calResult = calculation(2, 3);
display(calResult)


// ----------------------------------------- //

const myDisplay = (some) => {
    console.log("result:", some)
};

const myCalculation = (num1, num2) => {
    const result = num1 + num2
    myDisplay(result)
};

myCalculation(2, 3);


// ----------------------------------------------- //

const cbDisplay = (some) => {
    console.log("callback result:", some)
};

const cbCalculation = (num1, num2, callback) => {
    const result = num1 + num2
    callback(result)

};

cbCalculation(2, 3, cbDisplay);

// -----------------ASYNC--------------------------- //

console.log("one");
setTimeout(() => { console.log("number two is async task") }, 2000);
console.log("three");