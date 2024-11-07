import { Post } from "@prisma/client";

import prisma from "../repositories/prisma";
import postRepository from "../repositories/post-repository";
import {
  createPostParam,
  getPostListParam,
  modifyPostParam,
  postFavoriteParam,
} from "../types/post-types";

import { ORDER_BY, DEFAULT_ORDER_BY } from "../constants/sort";

async function createPost({
  userId,
  name,
  content,
}: createPostParam): Promise<Post | null> {
  const data = {
    User: {
      connect: { id: userId },
    },
    name,
    content,
  };
  const select = {};

  return await postRepository.createData({ data, select });
}

async function getPostList({
  orderBy,
  skip,
  take,
  keyword,
}: getPostListParam): Promise<Post[]> {
  const postOrderBy = { createdAt: ORDER_BY[orderBy] || DEFAULT_ORDER_BY };
  const where = {
    ...(keyword && {
      OR: [{ name: { contains: keyword } }, { content: { contains: keyword } }],
    }),
  };
  const select = {};

  return await postRepository.findManyByPaginationData({
    orderBy: postOrderBy,
    skip,
    take,
    where,
    select,
  });
}

async function getPost(postId: string): Promise<Post> {
  const where = {
    id: postId,
  };
  const select = {};

  return await postRepository.findUniqueOrThrowData({ where, select });
}

async function modifyPost({
  postId,
  name,
  content,
}: modifyPostParam): Promise<Post | null> {
  const where = {
    id: postId,
  };
  const data = { ...(name && { name }), ...(content && { content }) };
  const select = {};

  return await postRepository.updateData({ where, data, select });
}

async function deletePost(postId: string): Promise<void> {
  const where = { id: postId };

  return await postRepository.deleteData(where);
}

async function increasePostFavorite({
  userId,
  postId,
}: postFavoriteParam): Promise<Post | null> {
  const postWhere = { id: postId };
  const postData = { favoriteCount: { increment: 1 } };
  const select = {};
  const result = prisma.$transaction(async () => {
    return await postRepository.updateData({
      where: postWhere,
      data: postData,
      select,
    });
  });

  return result;
}

async function decreasePostFavorite({
  userId,
  postId,
}: postFavoriteParam): Promise<void> {
  const postWhere = { id: postId };
  const postData = { favoriteCount: { decrement: 1 } };
  const select = {};
  const result = prisma.$transaction(async () => {
    return await postRepository.updateData({
      where: postWhere,
      data: postData,
      select,
    });
  });
}

export default {
  createPost,
  getPostList,
  getPost,
  modifyPost,
  deletePost,
  increasePostFavorite,
  decreasePostFavorite,
};
