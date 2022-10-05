// 모든페이지에 렌더링되는 layout 컴포넌트 테스트
import { render, screen } from "@testing-library/react";
import Layout from "../../components/layout/index";
import React from "react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("layout component", () => {
  it("Layout 컴포넌트가 렌더링 된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const children = "children";

    render(
      <RouterContext.Provider value={router}>
        <Layout>`${children}</Layout>
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

  it("footer icon 깃허브 주소로 연결된다.", async () => {
    const router = createMockRouter({ pathname: "/" });
    const children = "children";

    render(
      <RouterContext.Provider value={router}>
        <Layout>`${children}</Layout>
      </RouterContext.Provider>,
    );

    const GithubIcon = screen.getByRole("link", { name: /github/i });
    expect(GithubIcon.getAttribute("href")).toBe(
      "https://github.com/otterp012",
    );
  });
});

// 로컬스토리지에 초기에 저장한 값 : 기본 다크 모드를 테스트 할 ㅅ ㅜ있을까?
// https://ui.toast.com/weekly-pick/ko_20210630
