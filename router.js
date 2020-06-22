import express from 'express';
import { home } from './controller.js';

export const router = express.Router();

router.get("/", home);



