import { config } from "./env";

export const DB_URL: string | undefined = config.DB_URL;
export const PORT: string | undefined = config.PORT;
export const ACCESS_TOKEN_SECRET: string | undefined =
  config.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET: string | undefined =
  config.REFRESH_TOKEN_SECRET;
