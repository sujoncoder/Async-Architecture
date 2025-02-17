// FETCH DATA WITH PROMISE

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => {
        if (!data) throw new Error('No data');
        console.log(data)
    })
    .catch(error => console.log(error.message))


// FETCH DATA WITH ASYNC-AWAIT
const fetchData = async () => {
    try {
        const url = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await url.json();
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
};

fetchData();