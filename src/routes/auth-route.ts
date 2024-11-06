import express, { Router } from "express";

import { validateSignIp, validateSignUp } from "../middlewares/validator";
import authController from "../controllers/auth-controller";

const authRouter: Router = express.Router();

authRouter
  .post("/sign-up", validateSignUp, authController.signUp)
  .post("/sign-in", validateSignIp, authController.signIn)
  .post("/refreshAccessToken", authController.refreshAccessToken);

export default authRouter;
