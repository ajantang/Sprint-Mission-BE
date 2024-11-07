import { Prisma, PostImage } from "@prisma/client";

import prisma from "./prisma";

async function createManyData(
  data: Prisma.PostImageCreateManyInput
): Promise<{ count: number }> {
  return await prisma.postImage.createMany({ data });
}

async function deleteManyData(
  where: Prisma.PostImageWhereInput
): Promise<void> {
  await prisma.postImage.deleteMany({ where });
}

export default {
  createManyData,
  deleteManyData,
};
