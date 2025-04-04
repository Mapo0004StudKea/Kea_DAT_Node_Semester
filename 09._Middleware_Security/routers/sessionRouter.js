import { Router } from 'express';

const router = Router();

router.get("/session/fillbananas", (req, res) => {
    req.session.bananaCount = (req.session.bananaCount + 1) || 1; // if it doesn't exist, set it to 1
    
    res.send({ message: `You have ${req.session.bananaCount} banana(s)` });
});

router.get("/session/eatbananas", (req, res) => {
    const bananaCount = (req.session.bananaCount);

    if (!bananaCount) {
        res.send({ message: "You have no bananas to eat." });
    } else {
        req.session.bananaCount -= 1;
        res.send({ message: `You have ${req.session.bananaCount} banana(s) left.` });
    }
});

export default router;