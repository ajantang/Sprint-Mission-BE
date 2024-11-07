import { Prisma, Post } from "@prisma/client";

import prisma from "./prisma";

async function createData({
  data,
  select,
}: {
  data: Prisma.PostCreateInput;
  select?: Prisma.PostSelect;
}): Promise<Post | null> {
  return await prisma.post.create({ data, select });
}

async function findUniqueOrThrowData({
  where,
  select,
}: {
  where: Prisma.PostWhereUniqueInput;
  select?: Prisma.PostSelect;
}): Promise<Post> {
  return await prisma.post.findUniqueOrThrow({ where, select });
}

async function countData(where: Prisma.PostWhereInput): Promise<number> {
  return await prisma.post.count({ where });
}

async function findManyByPaginationData({
  orderBy,
  skip,
  take,
  where,
  select,
}: {
  orderBy:
    | Prisma.PostOrderByWithRelationInput
    | Prisma.PostOrderByWithRelationInput[];
  skip: number;
  take: number;
  where: Prisma.PostWhereInput;
  select?: Prisma.PostSelect;
}): Promise<Post[]> {
  return await prisma.post.findMany({ orderBy, skip, take, where, select });
}

async function updateData({
  where,
  data,
  select,
}: {
  where: Prisma.PostWhereUniqueInput;
  data: Prisma.PostUpdateInput;
  select?: Prisma.PostSelect;
}): Promise<Post | null> {
  return await prisma.post.update({ where, data, select });
}

async function deleteData(where: Prisma.PostWhereUniqueInput): Promise<void> {
  await prisma.post.delete({ where });
}

export default {
  createData,
  countData,
  findManyByPaginationData,
  findUniqueOrThrowData,
  updateData,
  deleteData,
};
