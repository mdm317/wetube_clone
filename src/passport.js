import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import dotenv from 'dotenv';
import { githubLoginCallback } from "./controllers/userController";
dotenv.config();

passport.use(User.createStrategy());
passport.use(
    new GithubStrategy({
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: process.env.PRODUCTION===true
      ? `https://enigmatic-temple-89499.herokuapp.com/auth/github/callback`
      : `http://localhost:4000/auth/github/callback`
    },
        githubLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());