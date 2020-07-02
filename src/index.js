import "./db.js";
import "./models/Movie.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter.js";
import { localsMiddleware } from "./middlewares.js";
import morgan from "morgan";



const __dirname = "src";
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);


app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`✅  Server Ready!`));
