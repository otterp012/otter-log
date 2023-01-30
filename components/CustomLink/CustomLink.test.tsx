import { fireEvent, render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { createMockRouter } from "__mock__/next";

import CustomLink from "./CustomLink";

describe("CustomLink", () => {
  it("CustomLink를 누르면, href경로로 페이지가 이동된다..", async () => {
    // arrange
    const router = createMockRouter({ pathname: "/" });
    const mockHref = "test";
    render(
      <RouterContext.Provider value={router}>
        <CustomLink href={mockHref}>test</CustomLink>
      </RouterContext.Provider>,
    );

    const Link = screen.getByRole("link", {
      name: mockHref,
    });

    const path = `/${mockHref}`;

    // act
    fireEvent.click(Link);

    // assert
    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
