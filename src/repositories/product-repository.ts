import { Prisma, Product } from "@prisma/client";

import prisma from "./prisma";
import {
  ProductCreateDataParam,
  ProductFindUniqueOrThrowDataParam,
  ProductFindManyByPaginationParam,
  ProductUpdateDataParam,
} from "../types/product-types";

async function createData({
  data,
  select,
}: ProductCreateDataParam): Promise<Product | null> {
  return await prisma.product.create({ data, select });
}

async function findUniqueOrThrowData({
  where,
  select,
}: ProductFindUniqueOrThrowDataParam): Promise<Product> {
  return await prisma.product.findUniqueOrThrow({ where, select });
}

async function countData(where: Prisma.ProductWhereInput): Promise<number> {
  return await prisma.product.count({ where });
}

async function findManyByPaginationData({
  orderBy,
  skip,
  take,
  where,
  select,
}: ProductFindManyByPaginationParam): Promise<Product[]> {
  return await prisma.product.findMany({
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
}: ProductUpdateDataParam): Promise<Product | null> {
  return await prisma.product.update({ where, data, select });
}

async function deleteData(
  where: Prisma.ProductWhereUniqueInput
): Promise<void> {
  await prisma.product.delete({ where });
}

export default {
  createData,
  countData,
  findManyByPaginationData,
  findUniqueOrThrowData,
  updateData,
  deleteData,
};
