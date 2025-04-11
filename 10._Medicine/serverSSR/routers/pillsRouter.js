import { Router } from 'express';

const router = Router();

// i want to create a route for getting pulls and one for adding a pill
router.get("/pills", (req, res) => {
    res.send({ data: req.session.pills || [] });
});

router.post("/pills", (req, res) => {
    if (!req.session.pills) {
        req.session.pills = [];
    }
    req.session.pills.push(req.body);

    res.send({ data: req.session.pills });
});

export default router;