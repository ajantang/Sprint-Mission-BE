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
}: userSignInData): Promise<User | null | boolean> {
  return prisma.$transaction(async () => {
    const userWhere = { email: email };
    const findUserData = await userRepository.findFirstData({
      where: userWhere,
    });

    if (!findUserData) {
      return null;
    }

    const isMatch = await verifyPassword(
      findUserData.encryptedPassword,
      password
    );

    if (isMatch) {
      return false;
    }

    return findUserData;
  });
}

export default { signUp, signIn };
