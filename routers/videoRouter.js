import express from 'express';
import routes from '../routes.js';
import { editVideo } from '../controllers/videoController.js';

export const videoRouter = express.Router();

videoRouter.get(routes.editVideo, editVideo);