import express from "express";
import { ObjectId } from "mongodb";
import { getMovieById,createMovieById,updateMovieById,deleteMovieById,getAllMovies } from "../helper.js";
const router=express.Router();

router.get("/", async function (req,res){
    const movies = await getAllMovies(); 
    res.send(movies);  
});

//collecting array data from the variable movies and movie list according to movie id give
//by the user
router.get("/:_id", async function (request, response) {
    // console.log(request.params);
    // filter | find
    const { _id } = request.params;
    //const movie = movies.find((mv) => mv.id === id);
   // const movie = movies.find((item) => item.id ===id);
   console.log(_id);
   var u_id = new ObjectId(_id);
   const movie = await getMovieById(u_id); 
   console.log(movie);
   //condition if mentioned id is not there
   response.send(movie);
 
  });

//POST
router.post("/",async function (req,res){  
    const data=req.body;
     console.log(data);
    //middle ware ->intercepnt ->converting body to json we use app.use
    const result = await createMovieById(data); 
    res.send(result);
    
});

//delete
router.delete("/:_id", async function (request, response) {
    // console.log(request.params);
    const { _id } = request.params;
    var u_id = new ObjectId(_id);
   const result = await deleteMovieById(u_id); 
   console.log(_id);
   response.send(result);
  });
 
  //update
router.put("/:_id", async function (request, response) {
    // console.log(request.params);
    const updatedata=request.body; 
    console.log(updatedata);
    const { _id } = request.params;
    var u_id = new ObjectId(_id);
   const result = await updateMovieById(u_id, updatedata); 
   response.send(result);
  });
 export const moviesRouter = router;