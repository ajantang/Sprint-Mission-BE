import { Request, Response, NextFunction, RequestHandler } from "express";

import authService from "../services/auth-service";
import { userSignUpData } from "../types/user-types";

async function signUp(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const { email, password, nickname, name }: userSignUpData = req.body;
    const authInfo = await authService.signUp({
      email,
      password,
      nickname,
      name,
    });

    if (authInfo === null) {
      return res.status(500).send("계정 생성에 실패하였습니다"); // 커스텀 에러 예정.
    }

    return res.status(201).send(authInfo);
  } catch (err) {
    next(err);
  }
}

async function signIn(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  try {
    const { email, password, nickname, name }: userSignUpData = req.body;
    const authInfo = await authService.signIn({
      email,
      password,
    });

    if (authInfo === null) {
      return res.status(400).send("이메일 또는 비밀번호가 일치하지 않습니다"); // 커스텀 에러 예정. 사용자 정보가 없습니다
    }

    if (authInfo === false) {
      return res.status(400).send("이메일 또는 비밀번호가 일치하지 않습니다"); // 커스텀 에러 예정. 비밀번호가 일치하지 않습니다
    }

    return res.status(200).send(authInfo);
  } catch (err) {
    next(err);
  }
}

export default { signUp, signIn };
