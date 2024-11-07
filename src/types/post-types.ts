import { Prisma } from "@prisma/client";

interface BasePostParam {
  name: string;
  content: string;
}

export interface CreatePostParam extends BasePostParam {
  userId: string;
}

export interface GetPostListParam {
  orderBy: string;
  skip: number;
  take: number;
  keyword: string;
}

export interface ModifyPostParam extends BasePostParam {
  postId: string;
}

export interface PostFavoriteParam {
  userId: string;
  postId: string;
}

interface PostCreateInput {
  data: Prisma.PostCreateInput;
}
interface PostUpdateInput {
  data: Prisma.PostUpdateInput;
}
interface PostSelect {
  select?: Prisma.PostSelect;
}
interface PostWhereUniqueInput {
  where: Prisma.PostWhereUniqueInput;
}
interface PostWhereInput {
  where: Prisma.PostWhereInput;
}
interface PostPagenationInput {
  orderBy: { [id: string]: string };
  skip: number;
  take: number;
}

export interface PostCreateDataParam extends PostCreateInput, PostSelect {}

export interface PostFindUniqueOrThrowDataParam
  extends PostWhereUniqueInput,
    PostSelect {}

export interface PostFindManyByPaginationParam
  extends PostPagenationInput,
    PostWhereInput,
    PostSelect {}

export interface PostUpdateDataParam
  extends PostWhereUniqueInput,
    PostUpdateInput,
    PostSelect {}
