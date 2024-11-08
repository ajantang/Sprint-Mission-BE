import { userSchema } from "./user";
import { postSchema } from "./post";
import { productSchema } from "./product";
import { imageSchema, MIN_NUMBER_IMAGES, MAX_NUMBER_IMAGES } from "./image";
import { tagSchema, MIN_NUMBER_TAGS, MAX_NUMBER_TAGS } from "./tag";

export const CUSTOM_ERROR_INFO: { [errCode: number]: string } = {
  40000: "클라이언트 에러입니다",
  40030: "이메일 또는 비밀번호가 일치하지 않습니다", // "일치하는 이메일이 없습니다"
  40031: "이메일 또는 비밀번호가 일치하지 않습니다", // "비밀번호가 일치하지 않습니다"
  40040: "허용되지 않는 범위의 값입니다",
  40041: `price는 ${productSchema.MIN_VALUE_PRICE} 이상 ${productSchema.MAX_VALUE_PRICE} 이하로 입력해주세요`,
  40042: `images는 ${MIN_NUMBER_IMAGES}에서 ${MAX_NUMBER_IMAGES}개의 요소를 가져야 합니다`,
  40043: `tags는 ${MIN_NUMBER_TAGS}에서 ${MAX_NUMBER_TAGS}개의 요소를 가져야 합니다`,
  40049: "유효하지 않은 토큰입니다",
  40050: "email 정보가 필요합니다",
  40051: "password 정보가 필요합니다",
  40052: "nickname 정보가 필요합니다",
  40053: "name 정보가 필요합니다", // user
  40054: "name 정보가 필요합니다", // post
  40055: "content 정보가 필요합니다",
  40056: "name 정보가 필요합니다", // product
  40057: "description 정보가 필요합니다",
  40058: "price 정보가 필요합니다",
  40068: "refreshToken 정보가 필요합니다",
  40069: "정보가 부족합니다",
  40070: `email은 ${userSchema.MAX_LENGTH_EMAIL}자 이하로 입력해주세요`,
  40071: `password는 ${userSchema.MIN_LENGTH_PASSWORD}자 이상 ${userSchema.MAX_LENGTH_PASSWORD}자 이하로 입력해주세요`,
  40072: `nickname은 ${userSchema.MIN_LENGTH_NICKNAME}자 이상 ${userSchema.MAX_LENGTH_NICKNAME}자 이하로 입력해주세요`,
  40073: `name은 ${userSchema.MIN_LENGTH_NAME}자 이상 ${userSchema.MAX_LENGTH_NAME}자 이하로 입력해주세요`,
  40074: `name은 ${postSchema.MIN_LENGTH_NAME}자 이상 ${postSchema.MAX_LENGTH_NAME}자 이하로 입력해주세요`,
  40075: `content은 ${postSchema.MIN_LENGTH_CONTENT}자 이상 ${postSchema.MAX_LENGTH_CONTENT}자 이하로 입력해주세요`,
  40076: `name은 ${productSchema.MIN_LENGTH_NAME}자 이상 ${productSchema.MAX_LENGTH_NAME}자 이하로 입력해주세요`,
  40077: `description은 ${productSchema.MIN_LENGTH_DESCRIPTION}자 이상 ${productSchema.MAX_LENGTH_DESCRIPTION}자 이하로 입력해주세요`,
  40078: `image url은 ${imageSchema.MIN_LENGTH_IMAGE}에서 ${imageSchema.MAX_LENGTH_IMAGE}자의 문자열이어야 합니다`,
  40079: `tag는 ${tagSchema.MIN_LENGTH_TAG}에서 ${tagSchema.MAX_LENGTH_TAG}자의 문자열이어야 합니다`,
  40089: "데이터의 길이가 유효하지 않습니다",
  40090: "이메일 형식이 아닙니다",
  40098: "토큰 형식이 아닙니다",
  40099: "유효하지 않은 데이터 형식입니다",
  40100: "권한이 없습니다",
  40199: "로그인이 필요합니다",
  40300: "금지된 요청입니다",
  40301: "post 수정 권한이 없습니다",
  40302: "product 수정 권한이 없습니다",
  40303: "comment 수정 권한이 없습니다",
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
  50020: "토큰 복호화에 실패하였습니다",
};

export const RANGE_ERROR_MESSAGES: { [errVariable: string]: string } = {
  price: CUSTOM_ERROR_INFO[40041],
  images: CUSTOM_ERROR_INFO[40042],
  tags: CUSTOM_ERROR_INFO[40043],
  default: CUSTOM_ERROR_INFO[40040],
};

export const EMPTY_ERROR_MESSAGES: { [errVariable: string]: string } = {
  email: CUSTOM_ERROR_INFO[40050],
  password: CUSTOM_ERROR_INFO[40051],
  nickname: CUSTOM_ERROR_INFO[40052],
  name: CUSTOM_ERROR_INFO[40053],
  postName: CUSTOM_ERROR_INFO[40054],
  postContent: CUSTOM_ERROR_INFO[40055],
  productName: CUSTOM_ERROR_INFO[40056],
  productDescription: CUSTOM_ERROR_INFO[40057],
  price: CUSTOM_ERROR_INFO[40058],
  token: CUSTOM_ERROR_INFO[40068],
  default: CUSTOM_ERROR_INFO[40069],
};

export const LENGTH_ERROR_MESSAGES: { [errVariable: string]: string } = {
  email: CUSTOM_ERROR_INFO[40070],
  password: CUSTOM_ERROR_INFO[40071],
  nickname: CUSTOM_ERROR_INFO[40072],
  name: CUSTOM_ERROR_INFO[40073],
  postName: CUSTOM_ERROR_INFO[40074],
  postContent: CUSTOM_ERROR_INFO[40075],
  productName: CUSTOM_ERROR_INFO[40076],
  productDescription: CUSTOM_ERROR_INFO[40077],
  image: CUSTOM_ERROR_INFO[40078],
  tag: CUSTOM_ERROR_INFO[40079],
  default: CUSTOM_ERROR_INFO[40089],
};

export const PATTERN_ERROR_MESSAGES: { [errVariable: string]: string } = {
  email: CUSTOM_ERROR_INFO[40090],
  token: CUSTOM_ERROR_INFO[40098],
  default: CUSTOM_ERROR_INFO[40099],
};
