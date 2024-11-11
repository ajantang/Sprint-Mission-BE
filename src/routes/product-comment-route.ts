import express, { Router } from "express";

import { validationHandler } from "../middlewares/error";
import { validateAuthorization } from "../middlewares/validator-auth-input";
import {
  validateCreateProductComment,
  validateUpdateProductComment,
} from "../middlewares/validator-product-comment-input";

import { validateListQuery } from "../middlewares/validator-query-input";
import { isAuthorizedProductCommentIdParam } from "../middlewares/product-comment";
import { validateToken } from "../middlewares/token";
import productCommentController from "../controllers/product-comment-controller";

const productCommentRouter: Router = express.Router();

productCommentRouter
  .post(
    "/",
    validateAuthorization,
    validateCreateProductComment,
    validationHandler,
    validateToken,
    productCommentController.createProductComment
  )
  .get("/:productCommentId", productCommentController.getProductComment)
  .patch(
    "/:productCommentId",
    validateAuthorization,
    validateUpdateProductComment,
    validationHandler,
    validateToken,
    isAuthorizedProductCommentIdParam,
    productCommentController.modifyProductComment
  )
  .delete(
    "/:productCommentId",
    validateAuthorization,
    validationHandler,
    validateToken,
    isAuthorizedProductCommentIdParam,
    productCommentController.deleteProductComment
  );

export default productCommentRouter;
