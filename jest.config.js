// 기본 생성 설정
// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//   },
// };

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
