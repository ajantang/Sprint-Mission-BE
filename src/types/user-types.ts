export interface userSignInData {
  email: string;
  password: string;
}

export interface userSignUpData extends userSignInData {
  nickname: string;
  name: string;
}
