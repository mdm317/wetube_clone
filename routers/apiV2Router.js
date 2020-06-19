import express from 'express';
import routes from '../routes.js';
import { v2Edit, v2Remove } from '../controllers/apiV2Controller.js';

export const apiV2Router = express.Router();

apiV2Router.get(routes.v2Edit, v2Edit);
apiV2Router.get(routes.v2Remove, v2Remove);
