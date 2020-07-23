import dotenv from 'dotenv';
dotenv.config();
import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import flash from "express-flash";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";
import { localsMiddleware } from "./middlewares.js";

import routes from "./routes.js";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import globalRouter from "./routers/globalRouter.js";
import apiRouter from "./routers/apiRouter.js";


import "./passport";

const app = express();

const CokieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);




app.use(routes.api, apiRouter);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
