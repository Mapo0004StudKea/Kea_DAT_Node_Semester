// 1. Import Router from express
import { Router } from 'express';

// 2. Initialize the router
const router = Router();

router.get("/cannotsetheadersaftertheyvebeensenterror", (req, res) => {
    if (true) {
        return res.send({ message: "Welcome to room 1 " });
    }
    res.send({ message: "You are still in room 1" });
});

// middleware er functioner som kan give videre som callback

// greeter middleware
function greeter(req, res, next) {
    console.log("Hello there. Please enter the room.");
    next();
}

// greeter middleware
function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

router.get('/room', greeter, ipLogger, (req, res, next) => {
    // res.send({ message: "Welcome to room 1 " });
    next();
});

                // inline middleware
router.get('/room', greeter, (req, res, next) => {
    console.log("You are in the lobby for room 2")
    next();
}, (req, res) => {
    res.send({ message: "Welcome to the room 2" });
    
});

// router.get('/*splat', (req, res) => { // prøver at lave wildcard route
//    res.status(404).send("<h1>Not found</h1>");
// });

// 3. export the router
export default router;
