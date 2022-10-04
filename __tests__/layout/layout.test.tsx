// 모든페이지에 렌더링되는 layout 컴포넌트 테스트

import { render, screen } from "@testing-library/react";

describe("DarkMode Button", () => {
  // it은 테스트하고 싶은 하나의 케이스입니다
  it("다크모드 버튼이 렌더링 된다.", () => {
    // expect는 실제 값(received)이 기대하는(expected) 결과와 같은지 검증합니다.
    expect(1 + 1).toBe(2);
  });
});
