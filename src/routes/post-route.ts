import express, { Router } from "express";

import { validationHandler } from "../middlewares/error";
import { validateAuthorization, validatePost } from "../middlewares/validator";
import { validateToken, checkToken } from "../middlewares/token";
import postController from "../controllers/post-controller";

const postRouter: Router = express.Router();

postRouter
  .post(
    "/",
    validateAuthorization,
    validatePost,
    validationHandler,
    validateToken,
    postController.createPost
  )
  .get("/", checkToken, postController.getPostList)
  .get(
    "/:postId",
    validateAuthorization,
    validationHandler,
    validateToken,
    postController.getPost
  )
  .patch(
    "/:postId",
    validateAuthorization,
    validatePost,
    validationHandler,
    validateToken,
    postController.modifyPost
  )
  .delete(
    "/:postId",
    validateAuthorization,
    validationHandler,
    validateToken,
    postController.deletePost
  )
  .patch(
    "/:postId/favorite",
    validateAuthorization,
    validationHandler,
    validateToken,
    postController.increasePostFavorite
  )
  .delete(
    "/:postId/favorite",
    validateAuthorization,
    validationHandler,
    validateToken,
    postController.decreasePostFavorite
  );

export default postRouter;
