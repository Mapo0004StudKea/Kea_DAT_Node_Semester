// importere med require
const express = require('express');
const app = express();

        // express = biblioteket, .json er en utility pakke
app.use(express.json());

// anden måde at skrive det samme men bruger det andet: const app = require('express')();


        // endpoint
// route / get handler 
app.get("/", (req, res) => {
    res.send({ data: "This is the root route" });
});

// fra uge 3
console.log(__dirname);

app.get("/welcomepage", (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

// assignment: /blablabla
app.get("/blablabla", (req, res) => {
    res.send({ data: "This is the blablabla route" });
});

// assignemnt: create a route for /search that returns an empty JSON - fra uge 3
// task create a seatch where the query parameter is q that contains the search
// bruger http://localhost:8080/search?q=my%20search - altså ?q=

// kan sende data med get request: path variable og query string

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

// uge 3 ting:
// body parsing: mangler noget body parsing - bliver ikke parset. req.body bør bare være et array
app.post("/favoritepoliticians", (req, res) => {
    console.log(req.body);

    res.send({data: req.body});
});

// redirect backend (serverside) - uge 5
app.get("/redirecttofavoritethings", (req, res) => {
    res.redirect("/favoritethings/tulips/sea-lions");
});

// assignemnt: create a new route and send some data to it through the body - fra uge 3
app.post("/testroute", (req, res) => {
    console.log(req.body);

    res.send({data: req.body});
});

// smid i bunden af filen, problemer kan opstå hvis det er i toppen
app.listen(8080);