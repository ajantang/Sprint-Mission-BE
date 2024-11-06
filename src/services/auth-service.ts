import prisma from "../repositories/prisma";
import { User } from "@prisma/client";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

import { hashPassword, verifyPassword } from "../utils/password";
import userRepository from "../repositories/user-repository";
import {
  createAccessToken,
  createRefreshToken,
  extractUserIdFromRefreshToken,
} from "../utils/token";
import { userIndetificationInfoMapper } from "./mappers/user-mapper";

import {
  userSignUpData,
  userSignInData,
  userTokenInfo,
} from "../types/user-types";
import {
  userBaseSelect,
  userIdentificationSelect,
} from "./selectors/user-select";

async function signUp({
  email,
  password,
  nickname,
  name,
}: userSignUpData): Promise<User | null> {
  const encryptedPassword: string = await hashPassword(password);

  return prisma.$transaction(async () => {
    const userData = { email, encryptedPassword, nickname, name };
    const createUser = userRepository.createData({
      data: userData,
      select: userBaseSelect,
    });

    return createUser;
  });
}

async function signIn({
  email,
  password,
}: userSignInData): Promise<userTokenInfo | null | boolean> {
  return prisma.$transaction(async () => {
    const userWhere = { email: email };
    const findUserData = await userRepository.findFirstData({
      where: userWhere,
      select: userIdentificationSelect,
    });

    if (!findUserData) {
      return null;
    }

    const isMatch = await verifyPassword({
      hashedPassword: findUserData.encryptedPassword,
      plainPassword: password,
    });

    if (isMatch) {
      return false;
    }

    const accessToken = createAccessToken(findUserData.id);
    const refreshToken = createRefreshToken(findUserData.id);

    return userIndetificationInfoMapper({
      userInfo: findUserData,
      accessToken,
      refreshToken,
    });
  });
}

async function refreshAccessToken(
  refreshToken: string
): Promise<string | Error> {
  const userId: string | JsonWebTokenError | TokenExpiredError | Error =
    extractUserIdFromRefreshToken(refreshToken);

  if (typeof userId === "string") {
    return createAccessToken(userId);
  }

  return new Error("refresh token error"); // 커스텀 에러 예정
}

export default { signUp, signIn, refreshAccessToken };
