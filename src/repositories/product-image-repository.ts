import { Prisma } from "@prisma/client";

import prisma from "./prisma";

async function createManyData(
  data: Prisma.ProductImageCreateManyInput
): Promise<{ count: number }> {
  return await prisma.productImage.createMany({ data });
}

async function deleteManyData(
  where: Prisma.ProductImageWhereInput
): Promise<void> {
  await prisma.productImage.deleteMany({ where });
}

export default {
  createManyData,
  deleteManyData,
};
