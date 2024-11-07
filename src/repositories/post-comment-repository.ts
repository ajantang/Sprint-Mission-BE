import { Prisma, PostComment } from "@prisma/client";

import prisma from "./prisma";
import {
  PostCommentCreateDataParam,
  PostCommentFindUniqueOrThrowDataParam,
  PostCommentFindManyByPaginationParam,
  PostCommentUpdateDataParam,
} from "../types/post-comment-types";

async function createData({
  data,
  select,
}: PostCommentCreateDataParam): Promise<PostComment | null> {
  return await prisma.postComment.create({ data, select });
}

async function findUniqueOrThrowData({
  where,
  select,
}: PostCommentFindUniqueOrThrowDataParam): Promise<PostComment> {
  return await prisma.postComment.findUniqueOrThrow({ where, select });
}

async function countData(where: Prisma.PostCommentWhereInput): Promise<number> {
  return await prisma.postComment.count({ where });
}

async function findManyByPaginationData({
  orderBy,
  skip,
  take,
  where,
  select,
}: PostCommentFindManyByPaginationParam): Promise<PostComment[]> {
  return await prisma.postComment.findMany({
    orderBy,
    skip,
    take,
    where,
    select,
  });
}

async function updateData({
  where,
  data,
  select,
}: PostCommentUpdateDataParam): Promise<PostComment | null> {
  return await prisma.postComment.update({ where, data, select });
}

async function deleteData(
  where: Prisma.PostCommentWhereUniqueInput
): Promise<void> {
  await prisma.postComment.delete({ where });
}

export default {
  createData,
  countData,
  findManyByPaginationData,
  findUniqueOrThrowData,
  updateData,
  deleteData,
};
