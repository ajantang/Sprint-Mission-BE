import { Prisma } from "@prisma/client";

interface BaseProductCommentParam {
  productId: string;
  userId: string;
  content: string;
}

export interface CreateProductCommentParam extends BaseProductCommentParam {}

export interface GetProductCommentListParam {
  orderBy: string;
  skip: number;
  take: number;
}

export interface ModifyProductCommentParam extends BaseProductCommentParam {
  productCommentId: string;
}

export interface ProductCommentParam {
  userId: string;
  productCommentId: string;
}

interface ProductCommentCreateInput {
  data: Prisma.ProductCommentCreateInput;
}
interface ProductCommentUpdateInput {
  data: Prisma.ProductCommentUpdateInput;
}
interface ProductCommentSelect {
  select?: Prisma.ProductCommentSelect;
}
interface ProductCommentWhereUniqueInput {
  where: Prisma.ProductCommentWhereUniqueInput;
}
interface ProductCommentWhereInput {
  where: Prisma.ProductCommentWhereInput;
}
interface ProductCommentPagenationInput {
  orderBy: { [id: string]: string };
  skip: number;
  take: number;
}

export interface ProductCommentCreateDataParam
  extends ProductCommentCreateInput,
    ProductCommentSelect {}

export interface ProductCommentFindUniqueOrThrowDataParam
  extends ProductCommentWhereUniqueInput,
    ProductCommentSelect {}

export interface ProductCommentFindManyByPaginationParam
  extends ProductCommentPagenationInput,
    ProductCommentWhereInput,
    ProductCommentSelect {}

export interface ProductCommentUpdateDataParam
  extends ProductCommentWhereUniqueInput,
    ProductCommentUpdateInput,
    ProductCommentSelect {}
