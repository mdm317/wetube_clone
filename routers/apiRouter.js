import express from 'express';
import routes from '../routes.js';
import { apiDocument } from '../controllers/apiController.js';
import { apiV1Router } from './apiV1Router.js';
import { apiV2Router } from './apiV2Router.js';

export const apiRouter = express.Router();

apiRouter.get(routes.apiDocument, apiDocument);
apiRouter.use(routes.apiV1, apiV1Router);
apiRouter.use(routes.apiV2, apiV2Router);

