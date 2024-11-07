import { Prisma } from "@prisma/client";

import {
  postSelect,
  postDetailSelect,
} from "../services/selectors/post-select";

interface BasePostParam {
  name: string;
  content: string;
}

export interface CreatePostParam extends BasePostParam {
  userId: string;
}

export interface GetListParam {
  orderBy: string;
  skip: number;
  take: number;
  keyword: string;
}

export interface GetPostListParam extends GetListParam {
  userId: string;
}

export interface ModifyPostParam extends BasePostParam, PostFavoriteParam {}

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

// interface BasePostInclude {
//   PostImage: true;
//   FavoritePost: true;
//   User: true;
// }

// export type PostData = Prisma.PostGetPayload<{
//   include: BasePostInclude;
// }>;

// export type PostDetailData = Prisma.PostGetPayload<{
//   include: BasePostInclude & {
//     PostComment: true;
//   };
// }>;

export type PostData = Partial<
  Prisma.PostGetPayload<{
    select: typeof postSelect;
  }>
>;

export type PostDetailData = Partial<
  Prisma.PostGetPayload<{
    select: ReturnType<typeof postDetailSelect>;
  }>
>;
