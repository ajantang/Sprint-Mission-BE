import argon2 from "argon2";
import crypto from "crypto";

import { ARGON2_SECRET_KEY, ARGON2_SALT } from "../config";

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(ARGON2_SALT);
  const secretKey = Buffer.from(ARGON2_SECRET_KEY);

  try {
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,
      secret: secretKey,
      salt: salt,
    });
    return hash;
  } catch (error) {
    throw new Error("Error hashing password"); // 커스텀 에러로 변경 예정
  }
}

export async function verifyPassword(
  hashedPassword: string,
  plainPassword: string
): Promise<boolean> {
  try {
    const isMatch = await argon2.verify(hashedPassword, plainPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error verifying password"); // 커스텀 에러로 변경 예정
  }
}
