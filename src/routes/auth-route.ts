import express, { Router } from "express";

import {
  validateSignIp,
  validateSignUp,
  validateRefreshAccessToken,
} from "../middlewares/validator";
import { ValidationHandler } from "../middlewares/error";
import authController from "../controllers/auth-controller";

const authRouter: Router = express.Router();

authRouter
  .post("/sign-up", validateSignUp, ValidationHandler, authController.signUp)
  .post("/sign-in", validateSignIp, ValidationHandler, authController.signIn)
  .post(
    "/refreshAccessToken",
    validateRefreshAccessToken,
    ValidationHandler,
    authController.refreshAccessToken
  );

export default authRouter;
