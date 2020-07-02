import express from "express";
import { home, getCreateMovie, postCreateMovie, movieDetail, getEditMovie, postEditMovie, deleteMovie, filterMovie } from "./movieController.js";


const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);
movieRouter.get("/search", filterMovie);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/:id/edit", getEditMovie);
movieRouter.post("/:id/edit", postEditMovie);
movieRouter.get("/:id/delete", deleteMovie);





export default movieRouter;
