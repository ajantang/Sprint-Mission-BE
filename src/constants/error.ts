import { userSchema } from "./user";

export const CUSTOM_ERROR_INFO: { [errCode: number]: string } = {
  40000: "클라이언트 에러입니다",
  40050: "이메일 또는 비밀번호가 일치하지 않습니다", // "일치하는 이메일이 없습니다"
  40051: "이메일 또는 비밀번호가 일치하지 않습니다", // "비밀번호가 일치하지 않습니다"
  40070: "email 정보가 필요합니다",
  40071: "password는 정보가 필요합니다",
  40072: "nickname은 정보가 필요합니다",
  40073: "name은 정보가 필요합니다",
  40078: "refreshToken 정보가 필요합니다",
  40079: "정보가 부족합니다",
  40080: `email은 ${userSchema.MAX_LENGTH_EMAIL}자 이하로 입력해주세요`,
  40081: `password는 ${userSchema.MIN_LENGTH_PASSWORD}자 이상 ${userSchema.MAX_LENGTH_PASSWORD}자 이하로 입력해주세요`,
  40082: `nickname은 ${userSchema.MIN_LENGTH_NICKNAME}자 이상 ${userSchema.MAX_LENGTH_NICKNAME}자 이하로 입력해주세요`,
  40083: `name은 ${userSchema.MIN_LENGTH_NAME}자 이상 ${userSchema.MAX_LENGTH_NAME}자 이하로 입력해주세요`,
  40089: "데이터의 길이가 유효하지 않습니다",
  40090: "이메일 형식이 아닙니다",
  40098: "토큰 형식이 아닙니다",
  40099: "유효하지 않은 데이터 형식입니다",
  40100: "권한이 없습니다",
  40199: "로그인이 필요합니다",
  40300: "금지된 요청입니다",
  40400: "요청하신 존재하지 않습니다",
  40500: "Method Not Allowed",
  40600: "Not Acceptable",
  40800: "Request Timeout",
  40900: "Conflict",
  40901: "중복된(불가능한) 정보입니다",
  41100: "Length Required",
  41300: "Content Too Large",
  41400: "URI Too Long",
  41500: "Unsupported Media Type",
  50000: "서버 에러입니다",
  50010: "계정 생성에 실패하였습니다",
};

export const EMPTY_ERROR_MESSAGES: { [errVariable: string]: string } = {
  email: CUSTOM_ERROR_INFO[40070],
  password: CUSTOM_ERROR_INFO[40071],
  nickname: CUSTOM_ERROR_INFO[40072],
  name: CUSTOM_ERROR_INFO[40073],
  token: CUSTOM_ERROR_INFO[40078],
  default: CUSTOM_ERROR_INFO[40079],
};

export const LENGTH_ERROR_MESSAGES: { [errVariable: string]: string } = {
  email: CUSTOM_ERROR_INFO[40080],
  password: CUSTOM_ERROR_INFO[40081],
  nickname: CUSTOM_ERROR_INFO[40082],
  name: CUSTOM_ERROR_INFO[40083],
  default: CUSTOM_ERROR_INFO[40089],
};

export const PATTERN_ERROR_MESSAGES: { [errVariable: string]: string } = {
  email: CUSTOM_ERROR_INFO[40090],
  token: CUSTOM_ERROR_INFO[40098],
  default: CUSTOM_ERROR_INFO[40099],
};
