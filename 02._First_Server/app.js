// importere med require
const express = require('express');
const app = express();

// anden måde at skrive det samme men bruger det andet: const app = require('express')();


        // endpoint
// route / get handler 
app.get("/", (req, res) => {
    res.send({ data: "This is the root route" });
});

// assignment: /blablabla
app.get("/blablabla", (req, res) => {
    res.send({ data: "This is the blablabla route" });
});

// assignemnt: create a route for /search that returns an empty JSON - fra uge 3
// task create a seatch where the query parameter is q that contains the search
// bruger http://localhost:8080/search?q=my%20search - altså ?q=

// req og res er callback functioner
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send({data: `you seached for: ${req.query.q}`});
})

// assignment implement /yourfavoritenumber GET - fra uge 2
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