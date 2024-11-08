import { header, query, body, ValidationChain } from "express-validator";

import { userSchema } from "../constants/user";
import { postSchema } from "../constants/post";
import { productSchema } from "../constants/product";
import {
  imageSchema,
  MIN_NUMBER_IMAGES,
  MAX_NUMBER_IMAGES,
} from "../constants/image";
import { tagSchema, MIN_NUMBER_TAGS, MAX_NUMBER_TAGS } from "../constants/tag";
import {
  CUSTOM_ERROR_INFO,
  RANGE_ERROR_MESSAGES,
  EMPTY_ERROR_MESSAGES,
  LENGTH_ERROR_MESSAGES,
  PATTERN_ERROR_MESSAGES,
} from "../constants/error";

const validateBodyEmail: ValidationChain = body("email")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["email"])
  .bail()
  .isEmail()
  .withMessage(PATTERN_ERROR_MESSAGES["email"])
  .bail()
  .isLength({ max: userSchema.MAX_LENGTH_EMAIL })
  .withMessage(LENGTH_ERROR_MESSAGES["email"]);

const validateBodyPassword: ValidationChain = body("password")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["password"])
  .bail()
  .isLength({
    min: userSchema.MIN_LENGTH_PASSWORD,
    max: userSchema.MAX_LENGTH_PASSWORD,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["password"]);

const validateBodyNickname: ValidationChain = body("nickname")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["nickname"])
  .bail()
  .isLength({
    min: userSchema.MIN_LENGTH_NICKNAME,
    max: userSchema.MAX_LENGTH_NICKNAME,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["nickname"]);

const validateBodyName: ValidationChain = body("name")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["name"])
  .bail()
  .isLength({
    min: userSchema.MIN_LENGTH_NAME,
    max: userSchema.MAX_LENGTH_NAME,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["name"]);

const validateBodyRefreshToken: ValidationChain = body("refreshToken")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["token"])
  .bail()
  .isJWT()
  .withMessage(PATTERN_ERROR_MESSAGES["token"]);

export const validateSignUp: ValidationChain[] = [
  validateBodyEmail,
  validateBodyPassword,
  validateBodyNickname,
  validateBodyName,
];

export const validateSignIp: ValidationChain[] = [
  validateBodyEmail,
  validateBodyPassword,
];

export const validateRefreshAccessToken: ValidationChain[] = [
  validateBodyRefreshToken,
];

const validateHeaderToken: ValidationChain = header("authorization")
  .notEmpty()
  .withMessage(CUSTOM_ERROR_INFO[40100])
  .bail()
  .custom((value) => {
    if (!value.startsWith("Bearer ")) {
      throw new Error(PATTERN_ERROR_MESSAGES["token"]);
    }
    const token = value.split(" ")[1];
    if (!/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(token)) {
      throw new Error(PATTERN_ERROR_MESSAGES["token"]);
    }
    return true;
  });

export const validateAuthorization: ValidationChain[] = [validateHeaderToken];

const validateBodyCreatePostName: ValidationChain = body("name")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["postName"])
  .bail()
  .isLength({
    min: postSchema.MIN_LENGTH_NAME,
    max: postSchema.MAX_LENGTH_NAME,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["postName"]);

const validateBodyCreatePostContent: ValidationChain = body("content")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["postContent"])
  .bail()
  .isLength({
    min: postSchema.MIN_LENGTH_CONTENT,
    max: postSchema.MAX_LENGTH_CONTENT,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["postContent"]);

const validateBodyUpdatePostName: ValidationChain = body("name")
  .optional()
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["postName"])
  .bail()
  .isLength({
    min: postSchema.MIN_LENGTH_NAME,
    max: postSchema.MAX_LENGTH_NAME,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["postName"]);

const validateBodyUpdatePostContent: ValidationChain = body("content")
  .optional()
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["postContent"])
  .bail()
  .isLength({
    min: postSchema.MIN_LENGTH_CONTENT,
    max: postSchema.MAX_LENGTH_CONTENT,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["postContent"]);

export const validateCreatePost: ValidationChain[] = [
  validateBodyCreatePostName,
  validateBodyCreatePostContent,
];

export const validateUpdatePost: ValidationChain[] = [
  validateBodyUpdatePostName,
  validateBodyUpdatePostContent,
];

const validateBodyProductName: ValidationChain = body("name")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["productName"])
  .bail()
  .isLength({
    min: productSchema.MIN_LENGTH_NAME,
    max: productSchema.MAX_LENGTH_NAME,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["productName"]);

const validateBodyProductDescription: ValidationChain = body("description")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["productDescription"])
  .bail()
  .isLength({
    min: productSchema.MIN_LENGTH_DESCRIPTION,
    max: productSchema.MAX_LENGTH_DESCRIPTION,
  })
  .withMessage(LENGTH_ERROR_MESSAGES["productDescription"]);

const validateBodyPrice: ValidationChain = body("price")
  .notEmpty()
  .withMessage(EMPTY_ERROR_MESSAGES["price"])
  .bail()
  .isInt({
    min: productSchema.MIN_VALUE_PRICE,
    max: productSchema.MAX_VALUE_PRICE,
  })
  .withMessage(RANGE_ERROR_MESSAGES["price"]);

const validateBodyImages: ValidationChain = body("images")
  .optional()
  .isArray({ min: MIN_NUMBER_IMAGES, max: MAX_NUMBER_IMAGES })
  .withMessage(RANGE_ERROR_MESSAGES["images"])
  .bail()
  .custom((array) => {
    return array.every(
      (value: string) =>
        typeof value === "string" &&
        imageSchema.MIN_LENGTH_IMAGE <= value.length &&
        value.length <= imageSchema.MAX_LENGTH_IMAGE
    );
  })
  .withMessage(LENGTH_ERROR_MESSAGES["image"]);

const validateBodyTags: ValidationChain = body("tags")
  .optional()
  .isArray({ min: MIN_NUMBER_TAGS, max: MAX_NUMBER_TAGS })
  .withMessage(RANGE_ERROR_MESSAGES["tags"])
  .bail()
  .custom((array) => {
    return array.every(
      (value: string) =>
        typeof value === "string" &&
        tagSchema.MIN_LENGTH_TAG <= value.length &&
        value.length <= tagSchema.MAX_LENGTH_TAG
    );
  })
  .withMessage(LENGTH_ERROR_MESSAGES["tag"]);

export const validateProduct: ValidationChain[] = [
  validateBodyProductName,
  validateBodyProductDescription,
  validateBodyPrice,
  validateBodyImages,
  validateBodyTags,
];

// const validateBody : ValidationChain = body("")
// .notEmpty()
// .withMessage(EMPTY_ERROR_MESSAGES[""])
// .bail()
// .isLength({
//   min: ,
//   max: ,
// })
// .withMessage(LENGTH_ERROR_MESSAGES[""]);
