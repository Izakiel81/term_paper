import express from "express";
import dbconnection from './db.js';
import MainRouter from '../MVC/index.js';

const app = express();

const port = 4040;

app.use(express.json());
app.use(MainRouter);

app.listen(port, () => {
    dbconnection();
    console.log(`Server running on port ${port}`);
});
