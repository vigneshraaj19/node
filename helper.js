import { client } from "./index.js";

export async function getMovieById(u_id) {
    return await client
        .db("b30wd").collection("movies").findOne({_id: u_id });
}

export async function getUserByName(username) {
    return await client
        .db("b30wd").collection("users").findOne({ username:username });
}

export async function createMovieById(data) {
    return await client
        .db("b30wd").collection("movies").insertOne(data);
}
export async function createUser(data) {
    return await client
        .db("b30wd").collection("users").insertOne(data);
}

export async function updateMovieById(u_id, updatedata) {
    return await client
        .db("b30wd").collection("movies").updateOne({ _id: u_id }, { $set: updatedata });
}

export async function deleteMovieById(u_id) {
    return await client
        .db("b30wd").collection("movies").deleteOne({ _id: u_id });
}

export async function getAllMovies() {
    return await client
        .db("b30wd").collection("movies").find().toArray();
}

