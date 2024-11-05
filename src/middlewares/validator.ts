import { RequestHandler, Request, Response, NextFunction } from "express";
import {
  header,
  query,
  body,
  validationResult,
  ValidationChain,
} from "express-validator";

import { userSchema } from "../constants/user";

const validateBodyEmail: ValidationChain = body("email")
  .notEmpty()
  .withMessage("이메일 입력이 필요합니다")
  .isEmail()
  .withMessage("이메일 형식이 아닙니다")
  .isLength({ max: userSchema.MAX_LENGTH_EMAIL })
  .withMessage(
    `이메일 최대 길이(${userSchema.MAX_LENGTH_EMAIL})를 초과하였습니다`
  );

const validateBodyPassword: ValidationChain = body("password")
  .notEmpty()
  .withMessage("비밀번호 입력이 필요합니다")
  .isLength({
    min: userSchema.MIN_LENGTH_PASSWORD,
    max: userSchema.MAX_LENGTH_PASSWORD,
  })
  .withMessage(
    `비밀번호는 ${userSchema.MIN_LENGTH_PASSWORD} ~ ${userSchema.MAX_LENGTH_PASSWORD}자로 입력해주세요`
  );

const validateBodyNickname: ValidationChain = body("nickname")
  .notEmpty()
  .withMessage("닉네임 입력이 필요합니다")
  .isLength({
    min: userSchema.MIN_LENGTH_NICKNAME,
    max: userSchema.MAX_LENGTH_NICKNAME,
  })
  .withMessage(
    `닉네임은 ${userSchema.MIN_LENGTH_NICKNAME} ~ ${userSchema.MAX_LENGTH_NICKNAME}자로 입력해주세요`
  );

export const validateSignUp: ValidationChain[] = [
  validateBodyEmail,
  validateBodyPassword,
  validateBodyNickname,
];

export const validateSignIp: ValidationChain[] = [
  validateBodyEmail,
  validateBodyPassword,
];

export function handleValidationErrors(
  req: Request,
  res: Response,
  next: NextFunction
): void | Response<any, Record<string, any>> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}
