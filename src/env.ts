import dotenv from "dotenv";
import path from "path";

const NODE_ENV: string = process.env.NODE_ENV || "production";
const envFilePath: string = path.resolve(`./.env.${NODE_ENV}`).trim();

dotenv.config({ path: envFilePath });

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`DB_URL: ${process.env.DB_URL}`);
console.log(`PORT: ${process.env.PORT}`);

export const config: {
  DB_URL: string | undefined;
  PORT: string | undefined;
  ACCESS_TOKEN_SECRET: string | undefined;
  REFRESH_TOKEN_SECRET: string | undefined;
} = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
};
