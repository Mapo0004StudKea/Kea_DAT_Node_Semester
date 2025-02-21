const express = require('express');

const app = express();

let visitorsCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html")    
});

// task create a route /visitorCounts that returns the visitor count
app.get("/visitorcount", (req,res) => {
    res.send({ data: ++visitorsCount })
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))
