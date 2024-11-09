import { body, param, ValidationChain } from "express-validator";

import { postCommentSchema } from "../constants/post-comment";

import {
  EMPTY_ERROR_MESSAGES,
  LENGTH_ERROR_MESSAGES,
} from "../constants/error";

const validateBodyPostCommentContent: ValidationChain = body("content")
  .notEmpty()
  .withMessage("empty content") //EMPTY_ERROR_MESSAGES["postContent"])
  .bail()
  .isLength({
    min: postCommentSchema.MIN_LENGTH_CONTENT,
    max: postCommentSchema.MAX_LENGTH_CONTENT,
  })
  .withMessage("length content"); //LENGTH_ERROR_MESSAGES["postContent"]);

const validateBodyPostCommentPostId: ValidationChain = body("postId")
  .notEmpty()
  .withMessage("empty postId") //EMPTY_ERROR_MESSAGES["postContent"])
  .bail()
  .isUUID()
  .withMessage("uuid?"); //EMPTY_ERROR_MESSAGES["postContent"])

// export const validateParamPostCommentId: ValidationChain = param(
//   "postCommentId"
// )
//   .notEmpty()
//   .withMessage("empty postCommentId")
//   .bail()
//   .isUUID()
//   .withMessage("uuid?");

export const validateCreatePostComment: ValidationChain[] = [
  validateBodyPostCommentContent,
  validateBodyPostCommentPostId,
];

export const validateUpdatePostComment: ValidationChain[] = [
  validateBodyPostCommentContent,
];
