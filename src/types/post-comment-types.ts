import { Prisma } from "@prisma/client";

import { UserCommentInfo } from "./user-types";

interface BasePostCommentParam {
  postId: string;
  userId: string;
  content: string;
}

export interface CreatePostCommentParam extends BasePostCommentParam {}

export interface GetPostCommentListParam {
  orderBy: string;
  skip: number;
  take: number;
}

export interface ModifyPostCommentParam extends BasePostCommentParam {
  postCommentId: string;
}

export interface PostCommentParam {
  userId: string;
  postCommentId: string;
}

interface PostCommentCreateInput {
  data: Prisma.PostCommentCreateInput;
}
interface PostCommentUpdateInput {
  data: Prisma.PostCommentUpdateInput;
}
interface PostCommentSelect {
  select?: Prisma.PostCommentSelect;
}
interface PostCommentWhereUniqueInput {
  where: Prisma.PostCommentWhereUniqueInput;
}
interface PostCommentWhereInput {
  where: Prisma.PostCommentWhereInput;
}
interface PostCommentPagenationInput {
  orderBy: { [id: string]: string };
  skip: number;
  take: number;
}

export interface PostCommentData {
  id: string;
  content: string;
  createdAt: Date;
  User: UserCommentInfo;
}

export interface PostCommentCreateDataParam
  extends PostCommentCreateInput,
    PostCommentSelect {}

export interface PostCommentFindUniqueOrThrowDataParam
  extends PostCommentWhereUniqueInput,
    PostCommentSelect {}

export interface PostCommentFindManyByPaginationParam
  extends PostCommentPagenationInput,
    PostCommentWhereInput,
    PostCommentSelect {}

export interface PostCommentUpdateDataParam
  extends PostCommentWhereUniqueInput,
    PostCommentUpdateInput,
    PostCommentSelect {}
