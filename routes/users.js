import express from "express";
import bcrypt from "bcryptjs";
import { getMovieById,createMovieById,updateMovieById,deleteMovieById,getAllMovies,createUser,getUserByName } from "../helper.js";
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

router.post("/login",async function (req,res){  
    const {username,password}=req.body;  
    //db.users.findOne({username:"tamil"})
   const userFromDB = await getUserByName(username);
   console.log(userFromDB);
   if(!userFromDB)
   {
       res.status(404).send({message:"Invalid credentials"});
   }
   else{const storedPassword = userFromDB.password; // hashed password
   const isPasswordMatch = await bcrypt.compare(password, storedPassword);
   console.log("isPasswordMatch", isPasswordMatch);
   if (isPasswordMatch) {
       res.send({ message: "Successfull login" });
    } else
     {
         res.status(401).send({ message: "Invalid credentials" });
        }}

});


 export const usersRouter = router;