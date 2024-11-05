import express, { Request, Response, NextFunction, Router } from "express";

import { validateSignIp, validateSignUp } from "../middlewares/validator";
import authController from "../controllers/auth-controller";

const authRouter: Router = express.Router();

authRouter
  .post("/sign-up", validateSignUp, authController.signUp)
  .post("/sign-in", validateSignIp, authController.signIn)
  .post("/sign-out", (req: Request, res: Response, next: NextFunction) => {
    console.log("sign-out");
    res.send("sign-out");
  });

export default authRouter;
