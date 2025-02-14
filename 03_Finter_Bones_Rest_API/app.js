// importere med require
const express = require('express');

// vil gerne instansiere express
const app = express();

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

app.get("/fingerbones", (req, res) => {
   res.send({ data: fingerBones }); // Don't do this
   
});

app.get("/fingerbones/:id", (req, res) => {
    const fingerBoneId = Number(req.params.id);
    const foundFingerBones = fingerBones.find((fingerBones) => fingerBones.id === fingerBoneId);

    if (!foundFingerBones) {
        // error case
        res.status(404).send({error: `No finger bones found with id ${fingerBoneId}` })
        } else {
            res.send({ data: foundFingerBones });
        }
    });


//status codes
// 2XX - Everything went well 
// 4XX - Client Error
// 5XX - Server Error

// skal lytte til en port
const PORT = 8080;
app.listen(PORT);