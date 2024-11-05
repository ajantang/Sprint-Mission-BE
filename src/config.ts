import { config } from "./env";

export const DB_URL: string = config.DB_URL;
export const PORT: string = config.PORT;
export const ACCESS_TOKEN_SECRET: string = config.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET: string = config.REFRESH_TOKEN_SECRET;
export const ARGON2_SECRET_KEY: string = config.ARGON2_SECRET_KEY;
export const ARGON2_SALT: number = config.ARGON2_SALT;
