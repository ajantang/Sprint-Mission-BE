import express, { Request, Response, NextFunction, Router } from "express";
import { validateSignIp, validateSignUp } from "../middlewares/validator";

const authRouter: Router = express.Router();

authRouter
  .post(
    "/sign-up",
    validateSignUp,
    (req: Request, res: Response, next: NextFunction) => {
      console.log("sign-up");
      res.send("sign-up");
    }
  )
  .post(
    "/sign-in",
    validateSignIp,
    (req: Request, res: Response, next: NextFunction) => {
      console.log("sign-in");
      res.send("sign-in");
    }
  )
  .post("/sign-out", (req: Request, res: Response, next: NextFunction) => {
    console.log("sign-out");
    res.send("sign-out");
  });

export default authRouter;
