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
// console.log(result)


// ------ EXAMPLE 7 -- Nested Callbacks (Avoiding Callback Hell) ---------------//
function fetchUserData(userId, callback) {
    setTimeout(() => {
        const userData = { id: userId, name: "John Doe" };
        callback(userData, (posts) => {
            setTimeout(() => {
                const userPosts = ["Post 1", "Post 2"];
                posts(userPosts);
            }, 1000);
        });
    }, 2000);
};

// Example usage:
fetchUserData(123, (userData, fetchPosts) => {
    // console.log("User Data:", userData);

    fetchPosts((posts) => {
        // console.log("User Posts:", posts);
    });
});



// ------ EXAMPLE 8 -- Nested Callbacks with unknown function ---------------//
const mainFunction = (callback) => {
    const result = 12;
    callback(result)
};

// mainFunction((result) => {
//     console.log("Result: ", result)
// });


// ------ EXAMPLE 9 -- Nested Callbacks ---------------//
const step1 = (callback) => {
    setTimeout(() => {
        console.log("Completed Step 1")
        callback();
    }, 1000)
};

const step2 = (callback) => {
    setTimeout(() => {
        console.log("Completed Step 2")
        callback();
    }, 2000)
};

const step3 = (callback) => {
    setTimeout(() => {
        console.log("Completed Step 3")
        callback();
    }, 3000)
};

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("Yeah finished all step...")
//         })
//     })
// });



// ------ EXAMPLE 10 -- Basic Number ---------------//
const processNumber = (num, callback) => {
    const doubleNumber = num * 2;
    callback(doubleNumber);
};

const processValue = (num) => {
    console.log(num)
};
// processNumber(11, processValue);



// ------ EXAMPLE 11 -- Callback with Condition ---------------//
const checkEven = (num, callback) => {
    callback(num)

};

const printValue = (num) => {
    if (num / 2 === 0) {
        console.log("true")
    } else {
        console.log("false")
    }
};
// checkEven(2, printValue);


// ------ EXAMPLE 12 -- Nested Callbacks (Sequential Tasks) ---------------//
const taskRunner = (taskName, delay, callback) => {
    setTimeout(() => {
        console.log(`Task ${taskName} delay ${delay} min`)
        callback()
    }, delay)
};

taskRunner("jerry", 2000, () => {
    taskRunner("sujon", 1000, () => {
        taskRunner("sheikh", 3000, () => {
            console.log("All task completed !")
        })
    })
});


// ------ EXAMPLE 13 -- Callback with Data Transformation ---------------//
const transformArray = (arr, callback) => {
    const doubleNumber = [];

    for (let i = 0; i < arr.length; i++) {
        const processValue = callback(arr[i]);
        doubleNumber.push(processValue)
    };

    console.log(doubleNumber)
    return doubleNumber;
};


const doubleValue = (num) => num * 2;
transformArray([2, 3, 4, 88,], doubleValue);