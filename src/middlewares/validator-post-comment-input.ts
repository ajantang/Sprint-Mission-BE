import { body, ValidationChain } from "express-validator";

import { postCommentSchema } from "../constants/post-comment";

import {
  EMPTY_ERROR_MESSAGES,
  LENGTH_ERROR_MESSAGES,
  PATTERN_ERROR_MESSAGES,
} from "../constants/error";

const validateBodyPostCommentContent: ValidationChain = body("content")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["postCommentContent"])
  .bail()
  .isLength({
    min: postCommentSchema.MIN_LENGTH_CONTENT,
    max: postCommentSchema.MAX_LENGTH_CONTENT,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["postCommentContent"]);

const validateBodyPostCommentPostId: ValidationChain = body("postId")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["postId"])
  .bail()
  .isUUID()
  .withMessage(PATTERN_ERROR_MESSAGES["postId"]);

export const validateCreatePostComment: ValidationChain[] = [
  validateBodyPostCommentContent,
  validateBodyPostCommentPostId,
];

export const validateUpdatePostComment: ValidationChain[] = [
  validateBodyPostCommentContent,
];
