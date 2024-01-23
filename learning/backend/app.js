import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
const app= express();

import dotenv from 'dotenv';
dotenv.config({ path: "backend/config/config.env"})
//import all routes

import registerRoutes from "./routes/registers.js";
import connectDatabase from './config/dbConnect.js';
 
//connecting database
app.use(cors())
connectDatabase();
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.json());

app.use("/api",registerRoutes);
 app.listen(process.env.PORT, ()=>{
    console.log(`server started on PORT: ${process.env.PORT}`);
 });