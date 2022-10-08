import { fireEvent, render, screen } from "@testing-library/react";
import { createMockRouter } from "../../__mock__/next";
import { RouterContext } from "next/dist/shared/lib/router-context";

import CustomLink from "./CustomLink";

describe("CustomLink", () => {
  it("CustomLink를 누르면, href경로로 페이지가 이동된다..", async () => {
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
    fireEvent.click(Link);

    expect(router.push).toHaveBeenCalledWith(path, path, {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    });
  });
});
