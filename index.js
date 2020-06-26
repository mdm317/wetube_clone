import express from "express";
import path from "path";
import "./db.js";
import movieRouter from "./movieRouter.js";
import { localMiddleware } from "./middlewares.js";

const app = express();
app.set("view engine", "pug");
//app.set("views", path.join(__dirname, "views"));
app.use(localMiddleware);
app.use("/", movieRouter);
    

// Codesanbox does not need PORT :)
//app.listen(() => console.log(`✅  Server Ready!`));
app.listen(4000);