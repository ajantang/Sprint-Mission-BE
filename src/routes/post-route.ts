import express, { Router, Request, Response } from "express";

import { validateAuthorization } from "../middlewares/validator";
import { validateToken, checkToken } from "../middlewares/token";
import postController from "../controllers/post-controller";

const postRouter: Router = express.Router();

postRouter
  .post("/", validateAuthorization, validateToken, postController.createPost)
  .get("/", checkToken, postController.getPostList)
  .get("/:postId", validateAuthorization, validateToken, postController.getPost)
  .patch(
    "/:postId",
    validateAuthorization,
    validateToken,
    postController.modifyPost
  )
  .delete(
    "/:postId",
    validateAuthorization,
    validateToken,
    postController.deletePost
  )
  .patch(
    "/:postId/favorite",
    validateAuthorization,
    validateToken,
    postController.increasePostFavorite
  )
  .delete(
    "/:postId/favorite",
    validateAuthorization,
    validateToken,
    postController.decreasePostFavorite
  );

export default postRouter;
