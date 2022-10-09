// 모든페이지에 렌더링되는 layout 컴포넌트 테스트
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__mock__/next";

import AppLayout from "./AppLayout";

describe("layout component", () => {
  it("Layout 컴포넌트가 렌더링 된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const children = "children";

    render(
      <RouterContext.Provider value={router}>
        <AppLayout>`${children}</AppLayout>
      </RouterContext.Provider>,
    );

    const Heading = screen.getByRole("heading", { name: /otter-log/i });
    const Footer = screen.getByRole("contentinfo");
    const Nav = screen.getByRole("navigation");
    const SearchLink = screen.getByRole("link", { name: /SEARCH/i });
    const PostLink = screen.getByRole("link", { name: /POST/i });
    const ProjectsLink = screen.getByRole("link", { name: /Projects/i });

    expect(Heading).toBeInTheDocument();
    expect(Footer).toBeInTheDocument();
    expect(Nav).toBeInTheDocument();
    expect(SearchLink).toBeInTheDocument();
    expect(PostLink).toBeInTheDocument();
    expect(ProjectsLink).toBeInTheDocument();
  });

  it("모든 경로에서 AppLayout은 렌더링된다.", () => {
    const router = createMockRouter({ pathname: "/posts" });
    const children = "children";

    render(
      <RouterContext.Provider value={router}>
        <AppLayout>`${children}</AppLayout>
      </RouterContext.Provider>,
    );

    const Heading = screen.getByRole("heading", { name: /otter-log/i });
    const Footer = screen.getByRole("contentinfo");
    const Nav = screen.getByRole("navigation");
    const SearchLink = screen.getByRole("link", { name: /SEARCH/i });
    const PostLink = screen.getByRole("link", { name: /POST/i });
    const ProjectsLink = screen.getByRole("link", { name: /Projects/i });

    expect(Heading).toBeInTheDocument();
    expect(Footer).toBeInTheDocument();
    expect(Nav).toBeInTheDocument();
    expect(SearchLink).toBeInTheDocument();
    expect(PostLink).toBeInTheDocument();
    expect(ProjectsLink).toBeInTheDocument();
  });
});
