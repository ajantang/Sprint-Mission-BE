import { CUSTOM_ERROR_INFO } from "../constants/error";

export class CustomError extends Error {
  public status: number;

  constructor(status: number) {
    super(CUSTOM_ERROR_INFO[status] || "에러가 발생했습니다");
    this.status = Math.floor(status / 100);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export function throwCustomError({
  condition,
  errCode,
}: {
  condition: boolean;
  errCode: number;
}): void {
  console.log("throwCustomError : ", condition, ", ", errCode);
  if (condition) {
    throw new CustomError(errCode);
  }
}
