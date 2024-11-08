import { User } from "@prisma/client";

import userRepository from "../repositories/user-repository";
import { ModifyUserParam } from "../types/user-types";
import { userBaseSelect } from "./selectors/user-select";

async function getUser(userId: string): Promise<Partial<User>> {
  const where = { id: userId };

  return await userRepository.findUniqueOrThrowData({
    where,
    select: userBaseSelect,
  });
}

async function modifyUser({
  userId,
  nickname,
  image,
  password,
}: ModifyUserParam): Promise<Partial<User>> {
  if (password) {
  }

  const where = { id: userId };
  const encryptedPassword = "";
  const data = {
    ...(nickname && { nickname }),
    ...(image && { image }),
    ...(password && { encryptedPassword }),
  };

  return await userRepository.updateData({
    where,
    data,
    select: userBaseSelect,
  });
}

export default {
  getUser,
  modifyUser,
};
