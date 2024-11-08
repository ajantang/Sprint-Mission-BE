import express, { Router } from "express";

import { validationHandler } from "../middlewares/error";
import {
  validateAuthorization,
  validateCreatePost,
  validateUpdatePost,
} from "../middlewares/validator";
import { isAuthorizedPostIdParam } from "../middlewares/post";
import { validateToken, checkToken } from "../middlewares/token";
import postController from "../controllers/post-controller";

const postRouter: Router = express.Router();

postRouter
  .post(
    "/",
    validateAuthorization,
    validateCreatePost,
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
    validateUpdatePost,
    validationHandler,
    validateToken,
    isAuthorizedPostIdParam,
    postController.modifyPost
  )
  .delete(
    "/:postId",
    validateAuthorization,
    validationHandler,
    validateToken,
    isAuthorizedPostIdParam,
    postController.deletePost
  )
  .patch(
    "/:postId/favorite",
    validateAuthorization,
    validationHandler,
    validateToken,
    isAuthorizedPostIdParam,
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
