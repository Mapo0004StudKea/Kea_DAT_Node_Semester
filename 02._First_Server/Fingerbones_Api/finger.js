const express = require('express');
const app = express();

// In-memory storage for FingerBones
let fingerBones = [
    { id: 1, name: "Thumb", description: "This is the thumb" },
    { id: 2, name: "Index", description: "This is the index finger" },
    { id: 3, name: "Middle", description: "This is the middle finger"  },
    { id: 4, name: "Ring", description: "This is the ring finger" },
    { id: 5, name: "Pinky", description: "This is the pinky" },
];

// GET all finger bones
app.get("/fingerbones", (req, res) => {
    res.json(fingerBones);
});

// GET a single finger bone by ID
app.get("/fingerbones/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const fingerBone = fingerBones.find(function (bone) {
        return bone.id === id;
    });
    

    if (!fingerBone) {
        return res.status(404).json({ message: "FingerBone not found" });
    }

    res.json(fingerBone);
});

app.listen(8080);