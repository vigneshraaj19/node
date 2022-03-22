//express
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
//const express=require("express");
dotenv.config();
console.log(process.env.MONGO_URL);
const app=express();
const PORT=process.env.PORT;
//middle ware ->intercept ->converting body to json
app.use(express.json());
//it allows api to access to other url.
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
const client = await createConnection();

//cursor - pagination->convert to array(toarray)
//moree than 20 data we use this(toArray)
app.get("/",  function (req,res){
    const movies = "hello vignesh machi..🙄";
    res.send(movies);   
});


app.get("/movies", async function (req,res){
    const movies = await client
    .db("b30wd") .collection("movies") .find({}).toArray(); 
    res.send(movies);  
});



//collecting array data from the variable movies and movie list according to movie id give
//by the user
app.get("/movies/:id", async function (request, response) {
    console.log(request.params);
    // filter | find
    const { id } = request.params;
    //const movie = movies.find((mv) => mv.id === id);
   // const movie = movies.find((item) => item.id ===id);
   const movie = await client
   .db("b30wd") .collection("movies") .findOne({id:id}); 
   //condition if mentioned id is not there
   movie? response.send(movie): response.status(404)
   .send({ message: "No such movie found 😅" });
 
  });

//POST
app.post("/movies",async function (req,res){  
    const data=req.body;  
    console.log(data);
    //middle ware ->intercept ->converting body to json we use app.use
    const result = await client
    .db("b30wd") .collection("movies") .insertMany(data); 
    res.send(result);
});

//delete
app.delete("/movies/:id", async function (request, response) {
    console.log(request.params);
    const { id } = request.params;
   const result = await client
   .db("b30wd") .collection("movies") .deleteOne({id:id}); 
   response.send(result);
  });
 
  //update
  app.put("/movies/:id", async function (request, response) {
    console.log(request.params);
    const updatedata=request.body; 
    const { id } = request.params;
   const result = await client
   .db("b30wd") .collection("movies") .updateOne({id:id},{ $set: updatedata }); 
   response.send(result);
  });


  app.listen(PORT,() => console.log("server is just started"));
 
 