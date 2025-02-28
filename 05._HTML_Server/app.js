const express = require('express');

// {partiesLibrary} giver undefined skal være {parties} - destructuring
// const {parties} = require('./util/partiesLibrary.js');
// console.log(parties);

const app = express();

app.use(express.static("public")); // bruges til at gøre public tilgængelig

let visitorsCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontPage.html")    
});

// __dirname fortæller hvor man kører fra
app.get("/partypage", (req, res) => {
    res.sendFile(__dirname + "/public/partypage/partyPage.html") 
});

// task create a route /visitorCounts that returns the visitor count
app.get("/visitorcount", (req,res) => {
    res.send({ data: ++visitorsCount })
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))
