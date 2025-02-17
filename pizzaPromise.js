// You are building a system to simulate ordering a pizza.The process involves the following steps:

// Select Pizza: Choose a pizza type.
// Add Toppings: Add toppings to the pizza.
// Cook Pizza: Cook the pizza.
// Serve Pizza: Serve the pizza to the customer.

// SELECT PIZZA
const selectPizza = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const pizza = "Desi Pizza";
            console.log(`Selected pizza: ${pizza}`);
            resolve(pizza)
        }, 1000);
    })
};


// ADD TOPPINGS
const addToppings = (pizza) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const pizzaWithToppings = `${pizza} with extra cheese`;
            console.log(`Added toppings: ${pizzaWithToppings}`);
            resolve(pizzaWithToppings);
        }, 1000);
    })
};

// COOK PIZZA
const cookPizza = (pizzaWithToppings) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cookedPizza = `Cooked ${pizzaWithToppings}`;
            console.log(`Cooked pizza: ${cookedPizza}`);
            resolve(cookedPizza);
        }, 1000);
    })
};

// SERVE PIZZA
const servePizza = (cookedPizza) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Served pizza: ${cookedPizza}`);
            resolve();
        }, 1000);
    });
};


selectPizza()
    .then(addToppings)
    .then(cookPizza)
    .then(servePizza)
    .then(() => {
        console.log("Pizza order complete!");
    })
    .catch((err) => {
        console.log(err)
    })
