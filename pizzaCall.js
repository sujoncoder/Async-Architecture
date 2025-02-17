// You are building a system to simulate ordering a pizza.The process involves the following steps:

// Select Pizza: Choose a pizza type.
// Add Toppings: Add toppings to the pizza.
// Cook Pizza: Cook the pizza.
// Serve Pizza: Serve the pizza to the customer.

// SELECT PIZZA
const selectPizza = (callback) => {
    setTimeout(() => {
        const pizza = "Margherita";
        console.log(`Selected pizza: ${pizza}`);
        callback(pizza);
    }, 1000);
};


// ADD TOPPINGS
const addToppings = (pizza, callback) => {
    setTimeout(() => {
        const pizzaWithToppings = `${pizza} with extra cheese`;
        console.log(`Added toppings: ${pizzaWithToppings}`);
        callback(pizzaWithToppings);
    }, 1000);
};

// COOK PIZZA
const cookPizza = (pizzaWithToppings, callback) => {
    setTimeout(() => {
        const cookedPizza = `Cooked ${pizzaWithToppings}`;
        console.log(`Cooked pizza: ${cookedPizza}`);
        callback(cookedPizza);
    }, 1000);
};

// SERVE PIZZA
const servePizza = (cookedPizza, callback) => {
    setTimeout(() => {
        console.log(`Served pizza: ${cookedPizza}`);
        callback();
    }, 1000);
};


// Nested Callback Hell
selectPizza((pizza) => {
    addToppings(pizza, (pizzaWithToppings) => {
        cookPizza(pizzaWithToppings, (cookedPizza) => {
            servePizza(cookedPizza, () => {
                console.log("Pizza order complete!");
            });
        });
    });
});