// app.js
import express from 'express';

import path from 'path';

const app = express();

// Middleware til at parse JSON-data
app.use(express.json());

// app.js
import { add, myVariable } from './module.js';

console.log(add(5, 3)); // Output: 8
console.log(myVariable); // Output: 42

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./index.html"));
});

// Start serveren på port 8080
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log("Server is running on port", PORT);
});
