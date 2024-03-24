import express from "express";
import dbconnection from './db.js';

const app = express();

const port = 4040;

app.listen(port, () => {
    dbconnection();
    console.log(`Server running on port ${port}`);
});
