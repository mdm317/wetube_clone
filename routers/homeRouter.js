import express from 'express';
import routes from '../routes.js';
import { home } from '../controllers/homeController.js';
import { join, login, confirmAccount } from '../controllers/userController.js';

export const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.join, join);
homeRouter.get(routes.login, login);
homeRouter.get(routes.confirmAccount, confirmAccount);
