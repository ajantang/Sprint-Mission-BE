import { User } from "@prisma/client";

import prisma from "./prisma";
import {
  userCreateDataParams,
  userFindUniqueOrThrowDataParams,
} from "../types/user-types";

async function createData({
  data,
  select,
}: userCreateDataParams): Promise<User | null> {
  return await prisma.user.create({ data, select });
}

async function findUniqueOrThrowData({
  where,
  select,
}: userFindUniqueOrThrowDataParams): Promise<User> {
  return await prisma.user.findUniqueOrThrow({ where, select });
}

export default {
  createData,
  findUniqueOrThrowData,
};
