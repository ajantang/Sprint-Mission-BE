import { Prisma } from "@prisma/client";

interface BaseProductParam {
  name: string;
  description: string;
  price: number;
  favoriteCount?: number;
}

export interface CreateProductParam extends BaseProductParam {
  userId: string;
}

export interface GetProductListParam {
  orderBy: string;
  skip: number;
  take: number;
  keyword: string;
}

export interface ModifyProductParam extends BaseProductParam {
  productId: string;
}

export interface ProductFavoriteParam {
  userId: string;
  productId: string;
}

interface ProductCreateInput {
  data: Prisma.ProductCreateInput;
}
interface ProductUpdateInput {
  data: Prisma.ProductUpdateInput;
}
interface ProductSelect {
  select?: Prisma.ProductSelect;
}
interface ProductWhereUniqueInput {
  where: Prisma.ProductWhereUniqueInput;
}
interface ProductWhereInput {
  where: Prisma.ProductWhereInput;
}
interface ProductPagenationInput {
  orderBy: { [id: string]: string };
  skip: number;
  take: number;
}

export interface ProductCreateDataParam
  extends ProductCreateInput,
    ProductSelect {}

export interface ProductFindUniqueOrThrowDataParam
  extends ProductWhereUniqueInput,
    ProductSelect {}

export interface ProductFindManyByPaginationParam
  extends ProductPagenationInput,
    ProductWhereInput,
    ProductSelect {}

export interface ProductUpdateDataParam
  extends ProductWhereUniqueInput,
    ProductUpdateInput,
    ProductSelect {}
