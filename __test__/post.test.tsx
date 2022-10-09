import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { allPosts } from "contentlayer/generated";
import { createMockRouter } from "__mock__/next";
import { intersectionObserverMock } from "__mock__/intersectionObserver";

import { RouterContext } from "next/dist/shared/lib/router-context";
import Posts from "pages/post";

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

    const LastItem = document.querySelector("#lastItem") as HTMLElement;
    fireEvent.scroll(LastItem, {
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
