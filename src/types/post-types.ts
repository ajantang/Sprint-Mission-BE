import { Prisma } from "@prisma/client";

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
  orderBy:
    | Prisma.PostOrderByWithRelationInput
    | Prisma.PostOrderByWithRelationInput[];
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
