import express from "express";
import { getMovieById,createMovieById,updateMovieById,deleteMovieById,getAllMovies } from "../helper.js";
const router=express.Router();


router.get("/movies", async function (req,res){
    const movies = await getAllMovies(); 
    res.send(movies);  
});

//collecting array data from the variable movies and movie list according to movie id give
//by the user
router.get("/:id", async function (request, response) {
    console.log(request.params);
    // filter | find
    const { id } = request.params;
    //const movie = movies.find((mv) => mv.id === id);
   // const movie = movies.find((item) => item.id ===id);
   const movie = await getMovieById(id); 
   //condition if mentioned id is not there
   movie? response.send(movie): response.status(404)
   .send({ message: "No such movie found 😅" });
 
  });

//POST
router.post("/",async function (req,res){  
    const data=req.body;  
    console.log(data);
    //middle ware ->intercept ->converting body to json we use app.use
    const result = await createMovieById(data); 
    res.send(result);
});

//delete
router.delete("/:id", async function (request, response) {
    console.log(request.params);
    const { id } = request.params;
   const result = await deleteMovieById(id); 
   response.send(result);
  });
 
  //update
router.put("/:id", async function (request, response) {
    console.log(request.params);
    const updatedata=request.body; 
    const { id } = request.params;
   const result = await updateMovieById(id, updatedata); 
   response.send(result);
  });
 export const moviesRouter = router;