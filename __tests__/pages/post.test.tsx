import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { allPosts } from "contentlayer/generated";
import React from "react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";
import Posts from "pages/post";
import { intersectionObserverMock } from "../../__mock__/intersectionObserver";

describe("post page", () => {
  it("맨 위로가기 버튼을 누르면, 페이지가 맨 위로 이동된다.", () => {
    const router = createMockRouter({ pathname: "/post" });
    const data = allPosts;
    window.scrollTo = jest.fn();

    window.IntersectionObserver = jest
      .fn()
      .mockImplementation(intersectionObserverMock);

    render(
      <RouterContext.Provider value={router}>
        <Posts data={data} />
      </RouterContext.Provider>,
    );

    const toTopBtn = screen.getByText("맨 위로가기 ⬆️⬆️") as Node;
    fireEvent.click(toTopBtn);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});

describe("infinite scroll", () => {
  it("초기에, 3개의 section 컴포넌트가 렌더링되고 lastItem에 도달하면 3개가 추가로 렌더링된다.", async () => {
    const router = createMockRouter({ pathname: "/post" });
    const data = allPosts;

    window.IntersectionObserver = jest
      .fn()
      .mockImplementation(intersectionObserverMock);

    render(
      <RouterContext.Provider value={router}>
        <Posts data={data} />
      </RouterContext.Provider>,
    );

    const SectionHeadings = screen.getAllByRole("heading", {
      level: 3,
    });

    expect(SectionHeadings).toHaveLength(3);

    const toTopBtn = screen.getByText("맨 위로가기 ⬆️⬆️");
    fireEvent.scroll(toTopBtn, {
      target: { scrollY: 0 },
    });

    await waitFor(() => {
      return render(
        <RouterContext.Provider value={router}>
          <Posts data={data} />
        </RouterContext.Provider>,
      );
    });

    const AfterSectionHeadings = screen.getAllByRole("heading", {
      level: 3,
    });

    expect(AfterSectionHeadings).toHaveLength(6);
  });
});
