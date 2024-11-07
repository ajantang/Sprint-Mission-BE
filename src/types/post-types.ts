import { Prisma } from "@prisma/client";

export interface createPostParam {
  userId: string;
  name: string;
  content: string;
}

export interface getPostListParam {
  orderBy: string;
  skip: number;
  take: number;
  keyword: string;
}

export interface modifyPostParam {
  postId: string;
  name: string;
  content: string;
}

export interface postFavoriteParam {
  userId: string;
  postId: string;
}

interface postCreateInput {
  data: Prisma.PostCreateInput;
}
interface postUpdateInput {
  data: Prisma.PostUpdateInput;
}
interface postSelect {
  select?: Prisma.PostSelect;
}
interface postWhereUniqueInput {
  where: Prisma.PostWhereUniqueInput;
}
interface postWhereInput {
  where: Prisma.PostWhereInput;
}
interface postPagenationInput {
  orderBy: { [id: string]: string };
  skip: number;
  take: number;
}

export interface postCreateDataParam extends postCreateInput, postSelect {}

export interface postFindUniqueOrThrowDataParam
  extends postWhereUniqueInput,
    postSelect {}

export interface postFindManyByPaginationParam
  extends postPagenationInput,
    postWhereInput,
    postSelect {}

export interface postUpdateDataParam
  extends postWhereUniqueInput,
    postUpdateInput,
    postSelect {}
