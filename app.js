import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {globalRouter} from "./routers/globalRouter.js";
import { localMiddleware } from "./middlewares.js";
import routes from "./routes.js";
import { userRouter } from "./routers/userRouter.js";
import { videoRouter } from "./routers/videoRouter.js";



const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(localMiddleware);
app.use('/', globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);



export default app;