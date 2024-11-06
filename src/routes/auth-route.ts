import express, { Router } from "express";

import {
  validateSignIp,
  validateSignUp,
  validateRefreshAccessToken,
  handleValidationErrors,
} from "../middlewares/validator";
import authController from "../controllers/auth-controller";

const authRouter: Router = express.Router();

authRouter
  .post(
    "/sign-up",
    validateSignUp,
    handleValidationErrors,
    authController.signUp
  )
  .post(
    "/sign-in",
    validateSignIp,
    handleValidationErrors,
    authController.signIn
  )
  .post(
    "/refreshAccessToken",
    validateRefreshAccessToken,
    handleValidationErrors,
    authController.refreshAccessToken
  );

export default authRouter;
