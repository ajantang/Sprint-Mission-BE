import prisma from "../repositories/prisma";
import { User } from "@prisma/client";

import { hashPassword, verifyPassword } from "../utils/password";
import userRepository from "../repositories/user-repository";
import { userSignUpData, userSignInData } from "../types/user-types";

async function signUp({
  email,
  password,
  nickname,
  name,
}: userSignUpData): Promise<User | null> {
  const encryptedPassword: string = await hashPassword(password);

  return prisma.$transaction(async () => {
    const userData = { email, encryptedPassword, nickname, name };
    const createUser = userRepository.createData({ data: userData });

    return createUser;
  });
}

async function signIn({
  email,
  password,
}: userSignInData): Promise<User | null> {
  return prisma.$transaction(async () => {
    const userWhere = { email: email };
    const findUserData = await userRepository.findFirstData({
      where: userWhere,
    });

    if (!findUserData) {
      return null; // 커스텀 에러 예정. "이메일이 존재하지 않습니다"
    }

    const isMatch = await verifyPassword(
      findUserData.encryptedPassword,
      password
    );

    if (isMatch) {
      return null; // 커스텀 에러 예정. "비밀번호가 일치하지 않습니다"
    }

    return findUserData;
  });
}
