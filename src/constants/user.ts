const MIN_LENGTH_NAME: number = 1;
const MAX_LENGTH_NAME: number = 255;
const MIN_LENGTH_NICKNAME: number = 1;
const MAX_LENGTH_NICKNAME: number = 50;
const MIN_LENGTH_PASSWORD: number = 8;
const MAX_LENGTH_PASSWORD: number = 24;
const MIN_LENGTH_EMAIL: number = 1;
const MAX_LENGTH_EMAIL: number = 255;
const MIN_LENGTH_IMAGE: number = 1;
const MAX_LENGTH_IMAGE: number = 1024;

export const userSchema: { [id: string]: number } = {
  MIN_LENGTH_NAME,
  MAX_LENGTH_NAME,
  MIN_LENGTH_NICKNAME,
  MAX_LENGTH_NICKNAME,
  MIN_LENGTH_PASSWORD,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL,
  MAX_LENGTH_EMAIL,
  MIN_LENGTH_IMAGE,
  MAX_LENGTH_IMAGE,
};
