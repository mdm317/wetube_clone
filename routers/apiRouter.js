import express from "express";
import routes from "../routes";
import {  postAddView, postAddComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postAddView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;