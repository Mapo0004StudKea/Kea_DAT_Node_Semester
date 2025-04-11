import 'dotenv/config';

import express from 'express';

const app = express();

app.use(express.json());

// bruger pakken globalt
//import cors from 'cors';
//app.use(cors({
//        origin: true,
//        credentials: true
//      // origin: "http://localhost:5173",
//}));

// bruger pakken lokalt
//app.use((req, res, next) => {
//        res.header("Access-Control-Allow-Origin", "*");
//        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//        next();
//});

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


import session from 'express-session';

app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
}))

import employeeRouter from "./routers/employeesRouter.js";
app.use(employeeRouter);

import pillsRouter from "./routers/pillsRouter.js";
app.use(pillsRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));