import express, { Router, Request, Response } from "express";

import { validateAuthorization } from "../middlewares/validator";
import { validateToken, checkToken } from "../middlewares/token";

const postRouter: Router = express.Router();

postRouter
  .post(
    "/",
    validateAuthorization,
    validateToken,
    (req: Request, res: Response) => {
      res.status(201).send({ message: res.locals.userId });
    }
  )
  .get("/", checkToken)
  .get("/:postId", validateAuthorization, validateToken)
  .patch("/:postId", validateAuthorization, validateToken)
  .delete("/:postId", validateAuthorization, validateToken)
  .patch("/:postId/favorite", validateAuthorization, validateToken)
  .delete("/:postId/favorite", validateAuthorization, validateToken);

export default postRouter;
