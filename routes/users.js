import express from "express";
import bcrypt from "bcrypt";
import { getMovieById,createMovieById,updateMovieById,deleteMovieById,getAllMovies,createUser } from "../helper.js";
const router=express.Router();

async function genPassword(password)
{
    const salt = await bcrypt.genSalt(10); //10 rounds-security, 4s -speed
    const hashPassword = await bcrypt.hash(password,salt);
    console.log({salt,hashPassword});
    return hashPassword;
}


//POST
router.post("/signup",async function (req,res){  
    const {username,password}=req.body;  
    const hashPassword=await genPassword(password);
    const newUser={
        username:username,
        password:hashPassword
    }
  
    //middle ware ->intercept ->converting body to json we use app.use
    const result = await createUser(newUser); 
    res.send(result);
});

 export const usersRouter = router;