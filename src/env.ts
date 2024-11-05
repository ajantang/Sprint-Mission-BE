import dotenv from "dotenv";
import path from "path";

const NODE_ENV: string = process.env.NODE_ENV || "production";
const envFilePath: string = path.resolve(`./.env.${NODE_ENV}`).trim();

dotenv.config({ path: envFilePath });

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`DB_URL: ${process.env.DB_URL}`);
console.log(`PORT: ${process.env.PORT}`);

export const config: {
  DB_URL: string;
  PORT: string;
  ACCESS_TOKEN_SECRET: string;
  REFRESH_TOKEN_SECRET: string;
  ARGON2_SECRET_KEY: string;
  ARGON2_SALT: number;
} = {
  DB_URL: process.env.DB_URL as string,
  PORT: process.env.PORT as string,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET as string,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET as string,
  ARGON2_SECRET_KEY: process.env.ARGON2_SECRET_KEY as string,
  ARGON2_SALT: Number(process.env.ARGON2_SALT) || 16,
};
