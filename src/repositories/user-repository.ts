import { Prisma, User } from "@prisma/client";

import prisma from "./prisma";

async function createData({
  data,
  select,
}: {
  data: Prisma.UserCreateInput;
  select?: Prisma.UserSelect;
}): Promise<User | null> {
  return await prisma.user.create({ data, select });
}

async function findFirstOrThrowData({
  where,
  select,
}: {
  where: Prisma.UserWhereInput;
  select?: Prisma.UserSelect;
}): Promise<User | null> {
  return await prisma.user.findFirstOrThrow({ where, select });
}

export default {
  createData,
  findFirstOrThrowData,
};
