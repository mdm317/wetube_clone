import express from 'express';
import { home,  search  } from '../controllers/videoController.js';
import { login, getJoin, postJoin } from '../controllers/userController.js';

export const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
globalRouter.get("/join", getJoin);
globalRouter.post("/join", postJoin);

