import { User } from "@prisma/client";

import prisma from "./prisma";
import {
  userCreateDataParam,
  userFindUniqueOrThrowDataParam,
} from "../types/user-types";

async function createData({
  data,
  select,
}: userCreateDataParam): Promise<User | null> {
  return await prisma.user.create({ data, select });
}

async function findUniqueOrThrowData({
  where,
  select,
}: userFindUniqueOrThrowDataParam): Promise<User> {
  return await prisma.user.findUniqueOrThrow({ where, select });
}

export default {
  createData,
  findUniqueOrThrowData,
};
