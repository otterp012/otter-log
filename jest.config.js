module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**",
  ],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/components/$1",
    "^pages/(.*)$": "<rootDir>/pages/$1",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    hooks: "<rootDir>/hooks",
    __mock__: "<rootDir>/__mock__",
    "^constants/(.*)$": "<rootDir>/constants/$1",
    "^lib/(.*)$": "<rootDir>/lib/$1",
    store: "<rootDir>/store",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transformIgnorePatterns: ["/node_modules/(?!next)(.*)"],
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
