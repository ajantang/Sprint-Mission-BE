import { Prisma } from "@prisma/client";

export interface userSignInData {
  email: string;
  password: string;
}

export interface userSignUpData extends userSignInData {
  nickname: string;
  name: string;
}

export interface refreshToken {
  refreshToken: string;
}

export interface tokens extends refreshToken {
  accessToken: string;
}

export interface userBaseInfo {
  id: string;
  nickname: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface userIndetificationInfo extends userBaseInfo {
  encryptedPassword: string;
}

export interface userTokenInfo extends userBaseInfo, tokens {}

interface userCreateInput {
  data: Prisma.UserCreateInput;
}
interface userSelect {
  select?: Prisma.UserSelect;
}
interface userWhereUniqueInpu {
  where: Prisma.UserWhereUniqueInput;
}

export interface userCreateDataParams extends userCreateInput, userSelect {}
export interface userFindUniqueOrThrowDataParams
  extends userWhereUniqueInpu,
    userSelect {}
