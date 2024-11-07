import { Post } from "@prisma/client";

import prisma from "../repositories/prisma";
import postRepository from "../repositories/post-repository";
import favoritePostRepository from "../repositories/favorite-post-repository";
import {
  CreatePostParam,
  GetPostListParam,
  ModifyPostParam,
  PostFavoriteParam,
} from "../types/post-types";
import {
  PostSelect,
  postFavoriteSelect,
  postDetailSelect,
} from "./selectors/post-select";

import { ORDER_BY, DEFAULT_ORDER_BY } from "../constants/sort";

async function createPost({
  userId,
  name,
  content,
}: CreatePostParam): Promise<Post | null> {
  const data = {
    User: {
      connect: { id: userId },
    },
    name,
    content,
  };

  return await postRepository.createData({ data, select: PostSelect });
}

async function getPostList({
  userId,
  orderBy,
  skip,
  take,
  keyword,
}: GetPostListParam): Promise<Post[]> {
  const postOrderBy = { createdAt: ORDER_BY[orderBy] || DEFAULT_ORDER_BY };
  const where = {
    ...(keyword && {
      OR: [{ name: { contains: keyword } }, { content: { contains: keyword } }],
    }),
  };

  return await postRepository.findManyByPaginationData({
    orderBy: postOrderBy,
    skip,
    take,
    where,
    select: postFavoriteSelect(userId),
  });
}

async function getPost({ userId, postId }: PostFavoriteParam): Promise<Post> {
  const where = {
    id: postId,
  };

  return await postRepository.findUniqueOrThrowData({
    where,
    select: postDetailSelect(userId),
  });
}

async function modifyPost({
  userId,
  postId,
  name,
  content,
}: ModifyPostParam): Promise<Post | null> {
  const where = {
    id: postId,
  };
  const data = { ...(name && { name }), ...(content && { content }) };

  return await postRepository.updateData({
    where,
    data,
    select: postDetailSelect(userId),
  });
}

async function deletePost(postId: string): Promise<void> {
  const where = { id: postId };

  return await postRepository.deleteData(where);
}

async function increasePostFavorite({
  userId,
  postId,
}: PostFavoriteParam): Promise<Post | null> {
  const postWhere = { id: postId };
  const postData = { favoriteCount: { increment: 1 } };
  const favoritePostData = {
    User: {
      connect: { id: userId },
    },
    Post: {
      connect: { id: postId },
    },
  };

  const result = prisma.$transaction(async () => {
    favoritePostRepository.createData({ data: favoritePostData });

    return await postRepository.updateData({
      where: postWhere,
      data: postData,
      select: postFavoriteSelect(userId),
    });
  });

  return result;
}

async function decreasePostFavorite({
  userId,
  postId,
}: PostFavoriteParam): Promise<Post | null> {
  const postWhere = { id: postId };
  const postData = { favoriteCount: { decrement: 1 } };
  const favoritePostWhere = {
    userId_postId: {
      userId,
      postId,
    },
  };

  const result = prisma.$transaction(async () => {
    favoritePostRepository.deleteData(favoritePostWhere);

    return await postRepository.updateData({
      where: postWhere,
      data: postData,
      select: postFavoriteSelect(userId),
    });
  });

  return result;
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
