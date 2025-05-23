// importere med require
const express = require('express');

// vil gerne instansiere express
const app = express();

app.use(express.json());

// bruger datatype med objecter
const fingerBones = [
    {
        id: 1,
        artistName: "Phalange Knowles"
    },
    {
        id: 2,
        name: "distal phalange"
    }
];

let nextId = 3;

// **Home Route**
app.get("/", (req, res) => {
    res.send({ message: "Velkommen til FingerBones API. Brug /fingerbones for at indhente data" });
});


// **GET - Hent alle fingerbones**
app.get("/fingerbones", (req, res) => {
    res.json({ data: fingerBones });
});

// **GET - Hent en fingerbone baseret på ID**
app.get("/fingerbones/:id", (req, res) => {
    const fingerBoneId = parseInt(req.params.id);
    const fingerBone = fingerBones.find(fb => fb.id === fingerBoneId);

    if (!fingerBone) {
        return res.status(404).json({ error: `No finger bone found with id ${fingerBoneId}` });
    }

    res.json({ data: fingerBone });
});

// **POST - Tilføj en ny fingerbone**
app.post("/fingerbones", (req, res) => {
    const newFingerbone = req.body;
    newFingerbone.id = nextId++;

    fingerBones.push(newFingerbone);

    res.send({ data: newFingerbone });
})

// **PATCH - Opdater en eksisterende fingerbone**
app.patch("/fingerbones/:id", (req, res) => {
    const providedFingerBoneId = Number(req.params.id);
    const foundFingerBoneIndex = fingerBones.findIndex((fingerBones) => fingerBones.id === providedFingerBoneId);

    if (foundFingerBoneIndex === -1) {
        res.status(404).send({error: `Could not find a fingerbone with id ${providedFingerBoneId}`});
    } else {
        const existingFingerBone = fingerBones[foundFingerBoneIndex];

        const newFingerBone = { ...existingFingerBone, ...req.body, id: existingFingerBone.id };

        fingerBones [foundFingerBoneIndex] = newFingerBone;
        res.send({ data: newFingerBone });
    }   
});

console.log(fingerBones.findIndex((fingerBones) => false));

// **DELETE - Slet en fingerbone**
app.delete("/fingerbones/:id", (req, res) => {
    const providedFingerBoneId = Number(req.params.id);
    const foundFingerBoneIndex = fingerBones.findIndex((fingerBones) => fingerBones.id === providedFingerBoneId);

    if (foundFingerBoneIndex === -1) {
        res.status(404).send({error: `Could not find a fingerbone with id ${providedFingerBoneId}`});
    } else {
        fingerBones.splice(foundFingerBoneIndex, 1);
        res.status(204).send();
    }   
});

//status codes
// 2XX - Everything went well 
// 4XX - Client Error
// 5XX - Server Error

// skal lytte til en port
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return; // hvis error ikke er defineret går den ned til næste del - er undefined eller stacktrace
    }
    console.log("server is running on port", PORT)
})

// call-back function: (PORT, () => {console.log("server is running on port", PORT)}) er en function manger giver som agument til en anden function


// rest api conventionerne richardson maturity model:
// navngivning - 
// rækkefølgen - GET POST PUT DELETE
// 