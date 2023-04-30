//express
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors"; 
import bcrypt from "bcryptjs";
import {moviesRouter} from "./routes/movies.js";
import {usersRouter} from "./routes/users.js"
//const express=require("express");
dotenv.config();
const app=express();
const port=process.env.PORT || 7000;
//middle ware ->intercept ->converting body to json
app.use(express.json());
//it allows api to access to other url.ok fine
//eg google api
app.use(cors());
//connecting nodeJS and mongoDB
//const MONGO_URL = "mongodb://localhost";
//atlas online database
const MONGO_URL=process.env.MONGO_URL;
async function createConnection() 
{
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connected machi✌️😊");
    return client;
}
export const client = await createConnection();

//cursor - pagination->convert to array(toarray)
//moree than 20 data we use this(toArray)
app.get("/",  function (req,res){
    const movies = "hello vignesh machi..🙄";
    res.send(movies);   
});


  app.listen(port,() => console.log("server is just started"));
 

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
