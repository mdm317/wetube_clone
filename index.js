import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { router } from "./router.js";
import { localMiddleware } from "./middlewares.js";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(localMiddleware);
app.use('/', router);

app.listen(PORT);

export default app;
