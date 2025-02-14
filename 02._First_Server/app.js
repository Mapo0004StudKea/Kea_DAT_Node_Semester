// importere med require
const express = require('express');
const app = express();

// anden måde at skrive det samme men bruger det andet: const app = require('express')();



app.get("/", (req, res) => {
    res.send({ data: "This is the root route" });
});

// assignment: /blablabla
app.get("/blablabla", (req, res) => {
    res.send({ data: "This is the blablabla route" });
});

// assignment implement /yourfavoritenumber GET
app.get("/myfavoritenumber/:number", (req, res) => {
    console.log(req.params.number);
    res.send({ data: `your favorite number is: ${req.params.number}` });
});

// anden måde at skrive det samme på:
const functionReference = (req, res) => {
    res.send({ data: `This is the function reference route: ${req.params.favoriteNumber}` });
};

app.get("/yourfavoritenumber/:favoriteNumber", functionReference);

// assignment implement /favoritethings that allow the client to define a favorite flower and animal

const favoriteThings = (req, res) => {
    res.send({ data: `Your favorite flower is: ${req.params.flower}, and your favorite animal is: ${req.params.animal}` });
}

app.get("/favoritethings/:flower/:animal", favoriteThings);

// smid i bunden af filen, problemer kan opstå hvis det er i toppen
app.listen(8080);