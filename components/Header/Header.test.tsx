// 모든페이지에 렌더링되는 layout 컴포넌트 테스트
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__mock__/next";

import { Header } from "./Header";

describe("Header", () => {
  it("Header 컴포넌트가 렌더링 된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    render(
      <RouterContext.Provider value={router}>
        <Header />
      </RouterContext.Provider>,
    );

    const Heading = screen.getByRole("heading", { name: /otter-log/i });
    const Nav = screen.getByRole("navigation");
    expect(Heading).toBeInTheDocument();
    expect(Nav).toBeInTheDocument();
  });
});
