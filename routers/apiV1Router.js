import express from 'express';
import routes from '../routes.js';
import { v1Buy, v1Refund } from '../controllers/apiV1Controller.js';

export const apiV1Router = express.Router();


apiV1Router.get(routes.v1Buy,v1Buy);
apiV1Router.get(routes.v1Refund, v1Refund);
