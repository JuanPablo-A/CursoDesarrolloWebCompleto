// Fetch API con Async / Await
const url = "https://jsonplaceholder.typicode.com/comments";

const consultarApi = async () => {
    try {
        const responde = await fetch(url);
        if (!responde.ok) {
            throw new Error("Request failed");
        }
        const data = await responde.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};

consultarApi();
