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

async function findUniqueOrThrowData({
  where,
  select,
}: {
  where: Prisma.UserWhereUniqueInput;
  select?: Prisma.UserSelect;
}): Promise<User | null> {
  return await prisma.user.findUniqueOrThrow({ where, select });
}

export default {
  createData,
  findUniqueOrThrowData,
};
