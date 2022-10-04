/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // describe, it, expect와 같은 의존성을 자동으로 import 해줍니다.
    environment: "jsdom", // node에는 dom이 없기 때문에, js로 된 dom 구현체를 사용합니다
    setupFiles: "./setupTest.ts", // setup.ts 파일을 테스트 전마다 실행해줍니다
    css: false, // css를 import해야 하는 테스트라면 true로 켜주세요
  },
});
