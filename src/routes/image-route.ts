import express from "express";

import imageController from "../controllers/image-controller.js";

import { validateAuthorization } from "../middlewares/validator-auth-input.js";
import { validationHandler } from "../middlewares/error.js";
import { validateToken } from "../middlewares/token.js";

const imageRouter = express.Router();

imageRouter.post(
  "/upload",
  validateAuthorization,
  validationHandler,
  validateToken,
  imageController.uploadImage
);

export default imageRouter;
