import express from 'express';
import routes from '../routes.js';
import { homeCourse, newCourse, myCourse } from '../controllers/courseController.js';

export const courseRouter = express.Router();

courseRouter.get(routes.home, homeCourse);
courseRouter.get(routes.newCourse, newCourse);
courseRouter.get(routes.myCourse, myCourse);

