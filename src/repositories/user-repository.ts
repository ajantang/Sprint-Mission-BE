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

async function findFirstData({
  where,
  select,
}: {
  where: Prisma.UserWhereInput;
  select?: Prisma.UserSelect;
}): Promise<User | null> {
  return await prisma.user.findFirst({ where, select });
}

export default {
  createData,
  findFirstData,
};
