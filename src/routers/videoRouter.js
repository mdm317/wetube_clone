import express from "express";
import routes from "../routes.js";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
  postUploadUrl,
  getUploadUrl
} from "../controllers/videoController.js";
import {uploadVideo, onlyPrivate } from "../middlewares.js";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);
videoRouter.get(routes.uploadUrl, getUploadUrl);
videoRouter.post(routes.uploadUrl, postUploadUrl);


videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
