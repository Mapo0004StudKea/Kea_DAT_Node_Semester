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

// **Home Route**
app.get("/", (req, res) => {
    res.send({ message: "Welcome to the FingerBones API. Use /fingerbones for data access." });
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
    const { artistName, name } = req.body;

    if (!artistName && !name) {
        return res.status(400).json({ error: "Either artistName or name is required" });
    }

    const newId = fingerBones.length ? fingerBones[fingerBones.length - 1].id + 1 : 1;
    const newFingerBone = { id: newId, artistName, name };

    fingerBones.push(newFingerBone);
    res.status(201).json({ data: newFingerBone });
});


// **PUT - Opdater en eksisterende fingerbone**
app.put("/fingerbones/:id", (req, res) => {
    const fingerBoneId = parseInt(req.params.id);
    const fingerBone = fingerBones.find(fb => fb.id === fingerBoneId);

    if (!fingerBone) {
        return res.status(404).json({ error: `No finger bone found with id ${fingerBoneId}` });
    }

    const { artistName, name } = req.body;
    if (artistName !== undefined) fingerBone.artistName = artistName;
    if (name !== undefined) fingerBone.name = name;

    res.json({ data: fingerBone });
});

// **DELETE - Slet en fingerbone**
app.delete("/fingerbones/:id", (req, res) => {
    const fingerBoneId = parseInt(req.params.id);
    const index = fingerBones.findIndex(fb => fb.id === fingerBoneId);

    if (index === -1) {
        return res.status(404).json({ error: `No finger bone found with id ${fingerBoneId}` });
    }

    fingerBones.splice(index, 1);
    res.json({ message: `Finger bone with id ${fingerBoneId} has been deleted` });
});


//status codes
// 2XX - Everything went well 
// 4XX - Client Error
// 5XX - Server Error

// skal lytte til en port
const PORT = 8080;
app.listen(PORT);