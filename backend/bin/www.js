import express from "express";
import dbconnection from './db.js';
import MainRouter from '../MVC/index.js';
import cors from 'cors';

const app = express();
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const port = 4040;

app.use(express.json());
app.use(MainRouter);

app.listen(port, () => {
    dbconnection();
    console.log(`Server running on port ${port}`);
});
