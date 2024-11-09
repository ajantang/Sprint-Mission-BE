import express, { Router } from "express";

import { validationHandler } from "../middlewares/error";
import { validateAuthorization } from "../middlewares/validator-auth-input";
import {
  validateCreatePostComment,
  validateUpdatePostComment,
} from "../middlewares/validator-post-comment-input";

import { validateListQuery } from "../middlewares/validator-query-input";
import { isAuthorizedPostCommentIdParam } from "../middlewares/post-comment";
import { validateToken } from "../middlewares/token";
import postCommentController from "../controllers/post-comment-controller";

const postCommentRouter: Router = express.Router();

postCommentRouter
  .post(
    "/",
    validateAuthorization,
    validateCreatePostComment,
    validationHandler,
    validateToken,
    postCommentController.createPostComment
  )
  .get(
    "/",
    validateListQuery,
    validationHandler,
    postCommentController.getPostCommentList
  )
  .get("/:postCommentId", postCommentController.getPostComment)
  .patch(
    "/:postCommentId",
    validateAuthorization,
    validateUpdatePostComment,
    validationHandler,
    validateToken,
    isAuthorizedPostCommentIdParam,
    postCommentController.modifyPostComment
  )
  .delete(
    "/:postCommentId",
    validateAuthorization,
    validationHandler,
    validateToken,
    isAuthorizedPostCommentIdParam,
    postCommentController.deletePostComment
  );

export default postCommentRouter;
