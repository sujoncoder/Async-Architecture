const greet = (name, callback) => {
    console.log(`hello ${name}`);
    callback();
    return "finished greeting..."
};

const sayGoodBye = () => {
    console.log("goodbye!");
};

// console.log(greet("sujon", sayGoodBye));


// ---------------- EXAMPLE 2 ---------------//

const fetchData = (callback) => {
    setTimeout(() => {
        const data = { id: 1, name: "sujon", age: 25 };
        callback(data)
    }, 2000)
};

const processData = (data) => console.log(data);
// fetchData(processData);
// console.log("Fetching data...")


// ---------------- EXAMPLE 3 ---------------//
const calculate = (num1, num2, callback) => {
    const result = num1 + num2;
    callback(result)
};

const operation = (data) => console.log(data);

// calculate(22, 2, operation)


// ---------------- EXAMPLE 4 ---------------//
const delayedGreeting = (name, callback) => {
    setTimeout(() => {
        callback(`hello ${name}`)
    }, 3000)
};

const message = (data) => console.log(data)
// delayedGreeting("Sujon", message)
// console.log("waiting for message...")


// ---------------- EXAMPLE 5 -- Error-First Callback ---------------//
const divideNumbers = (num1, num2, callback) => {
    if (num2 === 0) {
        callback(new Error("Division by zero is not allowed."))
    } else {
        const result = num1 / num2
        callback(null, result)
    }
};

const show = (error, result) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log(result)
    }
}
// divideNumbers(20, 0, show);


// ---------------- EXAMPLE 6 -- Callback with Array Processing ---------------//
const processArry = (numbers, callback) => {
    const doubleValue = [];

    for (let i = 0; i < numbers.length; i++) {
        const processValue = callback(numbers[i])
        doubleValue.push(processValue);
    }

    return doubleValue;
};

const processDouble = (num) => num * 2

const numbers = [3, 4, 5, 6, 7];
const result = processArry(numbers, processDouble);
console.log(result)