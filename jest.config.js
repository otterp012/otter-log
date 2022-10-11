module.exports = {
  collectCoverageFrom: ["**/*.{js,jsx}", "!**/*.d.ts", "!**/node_modules/**"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/components/$1",
    components: "<rootDir>/components",
    "^pages/(.*)$": "<rootDir>/pages/$1",
    "next-contentlayer/hooks": "next-contentlayer/hooks",
    "contentlayer/generated": "<rootDir>/.contentlayer/generated",
    "contentlayer/generated": "<rootDir>/contentlayer/generated",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    "^constants/(.*)$": "<rootDir>/constants/$1",
    "^lib/(.*)$": "<rootDir>/lib/$1",
    "^__mock__/(.*)$": "<rootDir>/__mock__/$1",
  },
  // Jest Cannot find module absolute path
  // hooks 못찾아서 새로 추가한부분
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transformIgnorePatterns: [
    "/node_modules/(?!next-contentlayer)(.*)",
    "/node_modules/(?!next)(.*)",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};

// https://github.com/contentlayerdev/contentlayer/issues/227
// https://github.com/kouliavtsev/contentlayer-with-jest/blob/main/jest.config.js
// contentlayer jest 에러

// https://github.com/nrwl/nx/issues/8029
//   //   setupFilesAfterEnv: ["./jest.setup.js"], 오류

// https://stackoverflow.com/questions/58086182/jest-ignore-all-node-modules-except-1-package
// jest ignore all node_modules except 1 package
