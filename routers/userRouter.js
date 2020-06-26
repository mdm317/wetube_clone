import express from 'express';
import { home,  search  } from '../controllers/videoController.js';
import { login, editProfile, changePassword } from '../controllers/userController.js';
import routes from '../routes.js';

export const userRouter = express.Router();

userRouter.get("/", home);

userRouter.get("/login", login);
userRouter.get("/logout", login);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get("/search", search);



