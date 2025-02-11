const express = require('express');
const app = express();

// In-memory storage for FingerBones
let fingerBones = [
    { id: 1, name: "Thumb", description: "The thickest finger" },
    { id: 2, name: "Index", description: "Used for pointing" },
    { id: 3, name: "Middle", description: "The longest finger" },
    { id: 4, name: "Ring", description: "Wears a ring" },
    { id: 5, name: "Pinky", description: "The smallest finger" },
];

// GET all finger bones
app.get("/fingerbones", (req, res) => {
    res.json(fingerBones);
});

// GET a single finger bone by ID
app.get("/fingerbones/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const fingerBone = fingerBones.find((bone) => bone.id === id);

    if (!fingerBone) {
        return res.status(404).json({ message: "FingerBone not found" });
    }

    res.json(fingerBone);
});

app.listen(8080);