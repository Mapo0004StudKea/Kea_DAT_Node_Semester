import express from 'express';

const app = express();

app.use(express.json());

import gamesRouterouter from './routers/gamesRouter.js';
app.use(gamesRouterouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));