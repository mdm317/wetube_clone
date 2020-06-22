import express from 'express';
import { home, login, profile, photos  } from './controller.js';

export const router = express.Router();

router.get("/", home);
router.get("/login", login);
router.get("/photos", photos);
router.get("/profile", profile);




