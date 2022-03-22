import { client } from "./index.js";

export async function getMovieById(id) {
    return await client
        .db("b30wd").collection("movies").findOne({ id: id });
}

export async function createMovieById(data) {
    return await client
        .db("b30wd").collection("movies").insertMany(data);
}

export async function updateMovieById(id, updatedata) {
    return await client
        .db("b30wd").collection("movies").updateOne({ id: id }, { $set: updatedata });
}

export async function deleteMovieById(id) {
    return await client
        .db("b30wd").collection("movies").deleteOne({ id: id });
}

export async function getAllMovies() {
    return await client
        .db("b30wd").collection("movies").find({}).toArray();
}

