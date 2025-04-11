// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config';

import express from 'express';

const app = express();

import helmet from 'helmet';

app.use(helmet()); 

// function greetLoggedInUsers(req, res, next) {
    // let's assume that we do a DB check to see that they are logged in here
//     console.log("Welcome, logged in user");
//     next();
// }

import { rateLimit } from 'express-rate-limit'

const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 300, // Limit each IP to 300 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(generalLimiter);

const authLimiter = rateLimit({
    windowMs: 15* 60 * 1000, // 15 minutes
    limit: 5, // for security reasons, we limit the number of requests to 5, (here, per 15 minutes).
    standardHeaders: 'draft-8',
    legacyHeaders: false
});

app.use("/auth", authLimiter);

import session from "express-session";

app.use(session({
    // todo this should never be pushed
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // localhost false, in production, this should be true 
}));

// app.use("/auth", greetLoggedInUsers);

import middlewareRouter from "./routers/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

import sessionRouter from "./routers/sessionRouter.js";
app.use(sessionRouter);


// todo figure it out in the new syntax
app.get("/*splat", (req, res) => {
    res.status(404).send("<h1>Not Found</h1>")
});

app.all("/{*splat}", (req, res) => {
    res.status(404).send({ message: `${req.path} Not Found` });
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
