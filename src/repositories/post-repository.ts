import { Prisma, Post } from "@prisma/client";

import prisma from "./prisma";
import {
  postCreateDataParam,
  postFindUniqueOrThrowDataParam,
  postFindManyByPaginationParam,
  postUpdateDataParam,
} from "../types/post-types";

async function createData({
  data,
  select,
}: postCreateDataParam): Promise<Post | null> {
  return await prisma.post.create({ data, select });
}

async function findUniqueOrThrowData({
  where,
  select,
}: postFindUniqueOrThrowDataParam): Promise<Post> {
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
}: postFindManyByPaginationParam): Promise<Post[]> {
  return await prisma.post.findMany({ orderBy, skip, take, where, select });
}

async function updateData({
  where,
  data,
  select,
}: postUpdateDataParam): Promise<Post | null> {
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
