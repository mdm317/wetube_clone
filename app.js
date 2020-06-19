import express from 'express';
import { homeRouter } from './routers/homeRouter.js';
import routes from './routes.js';
import { courseRouter } from './routers/courseRouter.js';
import { apiRouter } from './routers/apiRouter.js';

const app = express();

app.use(routes.home, homeRouter);
app.use(routes.course,courseRouter);
app.use(routes.api, apiRouter);


export default app;
  