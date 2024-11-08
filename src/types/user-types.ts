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

export interface UserCommentInfo {
  id: string;
  nickname: string;
  image: string | null;
}

interface userCreateInput {
  data: Prisma.UserCreateInput;
}
interface userSelect {
  select?: Prisma.UserSelect;
}
interface userWhereUniqueInpu {
  where: Prisma.UserWhereUniqueInput;
}

export interface userCreateDataParam extends userCreateInput, userSelect {}
export interface userFindUniqueOrThrowDataParam
  extends userWhereUniqueInpu,
    userSelect {}
